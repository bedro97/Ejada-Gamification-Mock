package com.example.backend.controller;

import com.example.backend.entity.Level;
import com.example.backend.repository.LevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/levels")
public class LevelController {
    @Autowired
    private LevelRepository levelRepository;

    @GetMapping
    public List<Level> getAllLevels() {
        return levelRepository.findAll();
    }
} 