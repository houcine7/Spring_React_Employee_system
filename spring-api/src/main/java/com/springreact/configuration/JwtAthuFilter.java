package com.springreact.configuration;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAthuFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {
        //
        String authorization =request.getHeader("Authorization") ;
        String jwt ;
        String username;

        if(authorization==null || authorization.split(" ")[0]=="Bearer"){
            filterChain.doFilter(request,response);
            return ;
        }

        jwt =authorization.split(" ")[1] ;

        //TODO subtract user name from jwt token

    }
}
