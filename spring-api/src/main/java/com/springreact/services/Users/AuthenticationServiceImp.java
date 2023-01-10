package com.springreact.services.Users;


import com.springreact.Entities.UserEntity;
import com.springreact.controllers.Requests.LoginRequest;
import com.springreact.controllers.Requests.RegisterRequest;
import com.springreact.controllers.Responses.AuthenticationResponse;
import com.springreact.model.Employee;
import com.springreact.model.appUsers.Role;
import com.springreact.model.appUsers.UserDetailsImp;
import com.springreact.repository.UserRepository;
import com.springreact.services.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImp implements AuthenticationService{

    @Autowired
    UserRepository userRepository ;
    @Autowired
    PasswordEncoder passwordEncoder ;
    @Autowired
    JwtService jwtService ;

    @Override
    public AuthenticationResponse register(RegisterRequest registerRequest) {
        // build user details object

        var user = UserDetailsImp.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.USER)
                .build();
        // store the user to db :

        UserEntity userEntity= new UserEntity() ;
        BeanUtils.copyProperties(user ,userEntity);
        userRepository.save(userEntity);

        // generate the token with user details
        String token = jwtService.generateToken(user) ;

        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }

    @Override
    public AuthenticationResponse login(LoginRequest loginRequest) {
        return null;
    }
}
