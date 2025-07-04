package com.example.backend.service;

import com.example.backend.entity.Action;
import com.example.backend.entity.PointsLog;
import com.example.backend.entity.User;
import com.example.backend.repository.ActionRepository;
import com.example.backend.repository.PointsLogRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActionService {
    @Autowired
    private ActionRepository actionRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PointsLogRepository pointsLogRepository;

    public List<Action> getAllActions() {
        return actionRepository.findAll();
    }

    public Optional<Action> getActionById(Long id) {
        return actionRepository.findById(id);
    }

    public Action createAction(Action action) {
        return actionRepository.save(action);
    }

    public Optional<Action> updateAction(Long id, Action actionDetails) {
        return actionRepository.findById(id).map(action -> {
            action.setName(actionDetails.getName());
            action.setDescription(actionDetails.getDescription());
            action.setPoints(actionDetails.getPoints());
            action.setTenantId(actionDetails.getTenantId());
            return actionRepository.save(action);
        });
    }

    public boolean deleteAction(Long id) {
        return actionRepository.findById(id).map(action -> {
            actionRepository.delete(action);
            return true;
        }).orElse(false);
    }

    public PointsLog awardPoints(Long userId, Long actionId) {
        User user = userRepository.findById(userId).orElseThrow();
        Action action = actionRepository.findById(actionId).orElseThrow();
        PointsLog log = new PointsLog();
        log.setUser(user);
        log.setAction(action);
        log.setPoints(action.getPoints());
        log.setTenantId(action.getTenantId());
        return pointsLogRepository.save(log);
    }
} 