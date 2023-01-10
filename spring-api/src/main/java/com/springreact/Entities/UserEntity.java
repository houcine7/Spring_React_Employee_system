package com.springreact.Entities;


import com.springreact.services.appUsers.Role;
import jakarta.persistence.*;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String username;
    private String password ;
    @Enumerated(EnumType.STRING)
    private Role role;
}
