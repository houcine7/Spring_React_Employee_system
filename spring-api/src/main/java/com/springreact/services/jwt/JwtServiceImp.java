package com.springreact.services.jwt;


import com.springreact.utils.JwtUtils;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class JwtServiceImp implements JwtService{

    private JwtUtils jwtUtils =new JwtUtils() ;

    @Override
    public String extractUsername(String jwtToken) {
        return extractClaim(jwtToken,Claims::getSubject);
    }

    @Override
    public Claims extractAllClaims(String jwtToken) {
        return Jwts.parserBuilder()
                .setSigningKey(jwtUtils.getSignInKey())
                .build()
                .parseClaimsJws(jwtToken)
                .getBody() ;
    }

    @Override
    public <T> T extractClaim(String jwtToken, Function<Claims, T> claimsResolver) {
        Claims claims =this.extractAllClaims(jwtToken) ;
        return claimsResolver.apply(claims);
    }
}
