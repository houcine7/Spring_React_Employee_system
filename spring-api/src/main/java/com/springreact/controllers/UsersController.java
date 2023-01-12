package com.springreact.controllers;


import com.springreact.Entities.UserEntity;
import com.springreact.model.appUsers.UserDetailsImp;
import com.springreact.repository.UserRepository;
import com.springreact.services.jwt.JwtService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin("http://localhost:3000")
public class UsersController {

    @Autowired
    JwtService jwtService ;

    @Autowired
    UserRepository userRepository ;
    @GetMapping("/")
    public ResponseEntity<UserDetailsImp> getUser(@RequestHeader("Authorization") String token){
        //
        try{
            String username =jwtService.extractUsername(token.split(" ")[1]) ;
            UserEntity userEntity = userRepository.findByUsername(username).get();
            UserDetailsImp userDetailsImp =new UserDetailsImp() ;
            BeanUtils.copyProperties(userEntity,userDetailsImp);
            return ResponseEntity.ok(userDetailsImp);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}
