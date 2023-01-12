package com.springreact.controllers;


import com.springreact.controllers.Requests.LoginRequest;
import com.springreact.controllers.Requests.RegisterRequest;
import com.springreact.controllers.Responses.AuthenticationResponse;
import com.springreact.services.Users.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("http://localhost:3000")
public class AuthCntroller {

    @Autowired
    AuthenticationService authenticationService ;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest registerRequest){

        // TODO IMPLEMENT THIS FUNCTION
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @GetMapping("/")
    public ResponseEntity<String> testRoute(){
        return ResponseEntity.ok("working ................") ;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(authenticationService.login(loginRequest)) ;
    }
}
