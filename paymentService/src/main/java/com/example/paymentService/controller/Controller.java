package com.example.paymentService.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class Controller {

    @GetMapping("/health-check")
    public String healthCheck() {
        return "Payment service is OK";
    }

    @GetMapping("/list")
    public String index(Principal principal) {
        return "List of payments";
    }
}