package com.example.backend.controller;

import com.example.backend.entity.Action;
import com.example.backend.entity.PointsLog;
import com.example.backend.service.ActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/actions")
public class ActionController {
    @Autowired
    private ActionService actionService;

    @GetMapping
    public List<Action> getAllActions() {
        return actionService.getAllActions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Action> getActionById(@PathVariable Long id) {
        return actionService.getActionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Action createAction(@RequestBody Action action) {
        return actionService.createAction(action);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Action> updateAction(@PathVariable Long id, @RequestBody Action action) {
        return actionService.updateAction(id, action)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAction(@PathVariable Long id) {
        if (actionService.deleteAction(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/award")
    public PointsLog awardPoints(@RequestParam Long userId, @RequestParam Long actionId) {
        return actionService.awardPoints(userId, actionId);
    }
} 