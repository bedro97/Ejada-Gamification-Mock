package com.example.backend.dto;

import java.time.LocalDateTime;

public class PointsLogDTO {
    private Long id;
    private int points;
    private LocalDateTime timestamp;
    private Long actionId;
    private String actionName;
    private String tenantId;

    public PointsLogDTO() {}

    public PointsLogDTO(Long id, int points, LocalDateTime timestamp, Long actionId, String actionName, String tenantId) {
        this.id = id;
        this.points = points;
        this.timestamp = timestamp;
        this.actionId = actionId;
        this.actionName = actionName;
        this.tenantId = tenantId;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
    public Long getActionId() { return actionId; }
    public void setActionId(Long actionId) { this.actionId = actionId; }
    public String getActionName() { return actionName; }
    public void setActionName(String actionName) { this.actionName = actionName; }
    public String getTenantId() { return tenantId; }
    public void setTenantId(String tenantId) { this.tenantId = tenantId; }
} 