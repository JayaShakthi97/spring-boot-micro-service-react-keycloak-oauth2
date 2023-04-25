package com.keycloaktest.apigateway.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import java.security.Principal;

@CrossOrigin
@RestController
public class Controller {

    @GetMapping("/health-check")
    public String healthCheck() {
        return "Api gateway OK";
    }

    @GetMapping("/gateway/user")
    public String index(Principal principal) {
        return principal.getName();
    }
}
