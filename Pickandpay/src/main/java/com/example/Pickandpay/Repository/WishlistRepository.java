
package com.example.Pickandpay.Repository;

import com.example.Pickandpay.Model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
    List<Wishlist> findByUserId(int userId);
    void deleteById(int id); // For removing specific item
}
