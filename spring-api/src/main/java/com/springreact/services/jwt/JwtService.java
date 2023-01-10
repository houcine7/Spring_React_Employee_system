package com.springreact.services.jwt;

import io.jsonwebtoken.Claims;

import java.util.function.Function;

public interface JwtService {
    String extractUsername(String jwtToken) ;
    Claims extractAllClaims(String jwtToken) ;
    <T> T extractClaim(String token, Function<Claims ,T> claimsResolver) ;
}
