package com.example.backend.dto;

public class ActionDTO {
    private Long id;
    private String name;
    private String description;
    private int points;
    private String tenantId;

    public ActionDTO() {}

    public ActionDTO(Long id, String name, String description, int points, String tenantId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.points = points;
        this.tenantId = tenantId;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }
    public String getTenantId() { return tenantId; }
    public void setTenantId(String tenantId) { this.tenantId = tenantId; }
} 