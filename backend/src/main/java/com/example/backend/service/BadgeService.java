package com.example.backend.service;

import com.example.backend.entity.Badge;
import com.example.backend.repository.BadgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BadgeService {
    @Autowired
    private BadgeRepository badgeRepository;

    public List<Badge> getAllBadges() {
        return badgeRepository.findAll();
    }

    public Optional<Badge> getBadgeById(Long id) {
        return badgeRepository.findById(id);
    }

    public Badge createBadge(Badge badge) {
        return badgeRepository.save(badge);
    }

    public Optional<Badge> updateBadge(Long id, Badge badgeDetails) {
        return badgeRepository.findById(id).map(badge -> {
            badge.setName(badgeDetails.getName());
            badge.setDescription(badgeDetails.getDescription());
            badge.setCriteria(badgeDetails.getCriteria());
            badge.setImageUrl(badgeDetails.getImageUrl());
            badge.setTenantId(badgeDetails.getTenantId());
            return badgeRepository.save(badge);
        });
    }

    public boolean deleteBadge(Long id) {
        return badgeRepository.findById(id).map(badge -> {
            badgeRepository.delete(badge);
            return true;
        }).orElse(false);
    }
} 