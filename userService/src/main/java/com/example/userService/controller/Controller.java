package com.example.userService.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class Controller {

    @GetMapping("/health-check")
    public String healthCheck() {
        return "User service is OK";
    }

    @GetMapping("/me")
    public String me(Principal principal) {
        return principal.getName();
    }

    @GetMapping("/list")
    public String userList() {
        return "List of users for Bursar only";
    }
}
