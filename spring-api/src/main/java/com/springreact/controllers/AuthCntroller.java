package com.springreact.controllers;


import com.springreact.controllers.Requests.LoginRequest;
import com.springreact.controllers.Requests.RegisterRequest;
import com.springreact.controllers.Responses.AuthenticationResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthCntroller {


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest registerRequest){

        // TODO IMPLEMENT THIS FUNCTION

        return null;
    }


    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody LoginRequest registerRequest){

        // TODO IMPLEMENT THIS FUNCTION

        return null;
    }
}
