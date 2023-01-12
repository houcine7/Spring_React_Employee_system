package com.springreact.services.Users;


import com.springreact.Entities.UserEntity;
import com.springreact.controllers.Requests.LoginRequest;
import com.springreact.controllers.Requests.RegisterRequest;
import com.springreact.controllers.Responses.AuthenticationResponse;
import com.springreact.model.appUsers.Role;
import com.springreact.model.appUsers.UserDetailsImp;
import com.springreact.repository.UserRepository;
import com.springreact.services.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
    @Autowired
    AuthenticationManager authenticationManger ;

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
                .lastName(user.getLastName())
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .build();
    }

    @Override
    public AuthenticationResponse login(LoginRequest loginRequest) {
        // the credentials are valid
        authenticationManger.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername() ,
                        loginRequest.getPassword()
                )
        );

        System.out.println(authenticationManger.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername() ,
                        loginRequest.getPassword()
                )
        ).isAuthenticated());
        //get the user from db by username
        var user =userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow() ;

        //generate token
        UserDetailsImp userDetailsImp =new UserDetailsImp() ;
        BeanUtils.copyProperties(user,userDetailsImp);
        var token =jwtService.generateToken(userDetailsImp) ;
        //
        return AuthenticationResponse.builder()
                .token(token)
                .username(userDetailsImp.getUsername())
                .lastName(userDetailsImp.getLastName())
                .firstName(userDetailsImp.getFirstName())
                .build();
    }
}
