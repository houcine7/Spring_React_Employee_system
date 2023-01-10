package com.springreact.services.Users;

import com.springreact.controllers.Requests.LoginRequest;
import com.springreact.controllers.Requests.RegisterRequest;
import com.springreact.controllers.Responses.AuthenticationResponse;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest registerRequest) ;
    AuthenticationResponse login(LoginRequest loginRequest) ;
}
