package com.example.Pickandpay.Controller;

import com.example.Pickandpay.Model.Wishlist;
import com.example.Pickandpay.Service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
@CrossOrigin(origins = "http://localhost:4200")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @PostMapping
    public ResponseEntity<Wishlist> add(@RequestBody Wishlist wishlist) {
        return ResponseEntity.ok(wishlistService.addToWishlist(wishlist));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Wishlist>> getByUser(@PathVariable int userId) {
        return ResponseEntity.ok(wishlistService.getWishlistByUserId(userId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        wishlistService.removeFromWishlist(id);
        return ResponseEntity.ok("Wishlist item removed");
    }
}
