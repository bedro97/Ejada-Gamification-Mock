package com.example.backend.repository;

import com.example.backend.entity.PointsLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointsLogRepository extends JpaRepository<PointsLog, Long> {
    List<PointsLog> findByUserId(Long userId);
} 