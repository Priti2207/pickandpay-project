package com.example.Pickandpay.Repository;

import com.example.Pickandpay.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByName(String name);
    boolean existsByEmail(String email);
    Optional<User> findByEmailAndPassword(String email, String password);
}

