package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.PointsLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/leaderboard")
public class LeaderboardController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PointsLogRepository pointsLogRepository;

    @GetMapping
    public List<Map<String, Object>> getLeaderboard(@RequestParam(defaultValue = "all") String period) {
        List<User> users = userRepository.findAll();
        List<Map<String, Object>> leaderboard = new ArrayList<>();

        for (User user : users) {
            int totalPoints = pointsLogRepository.findByUserId(user.getId())
                .stream().mapToInt(p -> p.getPoints()).sum();
            Map<String, Object> entry = new HashMap<>();
            entry.put("id", user.getId());
            entry.put("name", user.getName());
            entry.put("email", user.getEmail());
            entry.put("points", totalPoints);
            leaderboard.add(entry);
        }

        leaderboard.sort((u1, u2) -> Integer.compare((int)u2.get("points"), (int)u1.get("points")));

        // Limit to top 10
        if (leaderboard.size() > 10) {
            return leaderboard.subList(0, 10);
        }
        return leaderboard;
    }
} 