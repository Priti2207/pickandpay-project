package com.example.Pickandpay.Repository;

import com.example.Pickandpay.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findByUserId(int userId);
    void deleteByUserId(int userId);
}
