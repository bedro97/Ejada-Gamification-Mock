package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;
import com.example.backend.dto.UserDTO;
import com.example.backend.dto.PointsLogDTO;
import com.example.backend.entity.PointsLog;
import com.example.backend.entity.Level;
import com.example.backend.repository.PointsLogRepository;
import com.example.backend.repository.LevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private PointsLogRepository pointsLogRepository;
    @Autowired
    private LevelRepository levelRepository;

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers().stream()
                .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail(), user.getTenantId()))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        Optional<User> userOpt = userService.getUserById(id);
        return userOpt
                .map(user -> ResponseEntity.ok(new UserDTO(user.getId(), user.getName(), user.getEmail(), user.getTenantId())))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.deleteUser(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/points-history")
    public List<PointsLogDTO> getPointsHistory(@PathVariable Long id) {
        List<PointsLog> logs = pointsLogRepository.findByUserId(id);
        return logs.stream().map(log -> new PointsLogDTO(
            log.getId(),
            log.getPoints(),
            log.getTimestamp(),
            log.getAction() != null ? log.getAction().getId() : null,
            log.getAction() != null ? log.getAction().getName() : null,
            log.getTenantId()
        )).toList();
    }

    @GetMapping("/{id}/level")
    public String getUserLevel(@PathVariable Long id) {
        // Calculate user level based on points and level thresholds
        List<PointsLog> logs = pointsLogRepository.findByUserId(id);
        int totalPoints = logs.stream().mapToInt(PointsLog::getPoints).sum();
        List<Level> levels = levelRepository.findAll();
        levels.sort((a, b) -> Integer.compare(b.getMinPoints(), a.getMinPoints())); // Descending
        for (Level level : levels) {
            if (totalPoints >= level.getMinPoints()) {
                return level.getName();
            }
        }
        return "Unranked";
    }
} 