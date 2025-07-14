package com.example.Pickandpay.Repository;

import com.example.Pickandpay.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryIgnoreCase(String category); // ✅ Add this
}
