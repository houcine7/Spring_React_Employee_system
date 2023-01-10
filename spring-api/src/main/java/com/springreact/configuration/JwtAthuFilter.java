package com.springreact.configuration;

import com.springreact.services.jwt.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAthuFilter extends OncePerRequestFilter {

    @Autowired
    JwtService jwtService ;

    @Autowired
    UserDetailsService userDetailsService ;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {
        //
        String authorization =request.getHeader("Authorization") ;
        String jwt ;
        String username ;

        if(authorization==null || authorization.split(" ")[0]=="Bearer"){
            filterChain.doFilter(request,response);
            return ;
        }

        jwt =authorization.split(" ")[1] ;
        username= jwtService.extractUsername(jwt) ;
        if(username !=null && SecurityContextHolder.getContext().getAuthentication()==null){
            UserDetails userdetails =userDetailsService.loadUserByUsername(username) ;

            UsernamePasswordAuthenticationToken authToken =new UsernamePasswordAuthenticationToken(
                    userdetails ,
                    null ,
                    userdetails.getAuthorities()
            ) ;

            authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(authToken);
        }
        filterChain.doFilter(request,response);

    }
}
