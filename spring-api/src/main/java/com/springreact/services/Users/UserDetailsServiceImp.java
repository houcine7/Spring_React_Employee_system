package com.springreact.services.Users;

import com.springreact.Entities.UserEntity;
import com.springreact.exceptions.NoUserFoundException;
import com.springreact.model.appUsers.UserDetailsImp;
import com.springreact.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImp implements UserDetailsService {
    @Autowired
    UserRepository userRepository ;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity= userRepository.findByUsername(username).
                orElseThrow(()->new NoUserFoundException("No user found by the provided user name"));
        UserDetailsImp userDetailsImp =new UserDetailsImp() ;
        BeanUtils.copyProperties(userEntity ,userDetailsImp);
        return userDetailsImp;
    }
}
