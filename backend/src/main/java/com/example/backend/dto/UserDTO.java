package com.example.backend.dto;

public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String tenantId;
    private String avatar;
    private int level;
    private int points;
    private int badges;
    private String joinDate;
    private String lastActive;
    private String status;
    private int progress;

    public UserDTO() {}

    public UserDTO(Long id, String name, String email, String tenantId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.tenantId = tenantId;
        this.avatar = "";
        this.level = 1;
        this.points = 0;
        this.badges = 0;
        this.joinDate = java.time.LocalDate.now().toString();
        this.lastActive = java.time.LocalDate.now().toString();
        this.status = "active";
        this.progress = 0;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getTenantId() { return tenantId; }
    public void setTenantId(String tenantId) { this.tenantId = tenantId; }
    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }
    public int getLevel() { return level; }
    public void setLevel(int level) { this.level = level; }
    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }
    public int getBadges() { return badges; }
    public void setBadges(int badges) { this.badges = badges; }
    public String getJoinDate() { return joinDate; }
    public void setJoinDate(String joinDate) { this.joinDate = joinDate; }
    public String getLastActive() { return lastActive; }
    public void setLastActive(String lastActive) { this.lastActive = lastActive; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public int getProgress() { return progress; }
    public void setProgress(int progress) { this.progress = progress; }
} 