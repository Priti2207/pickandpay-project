package com.example.Pickandpay.Controller;

import com.example.Pickandpay.Model.Cart;
import com.example.Pickandpay.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        return ResponseEntity.ok(cartService.addToCart(cart));
    }

    @GetMapping
    public ResponseEntity<List<Cart>> getAllCartItems() {
        return ResponseEntity.ok(cartService.getAllCartItems());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Cart>> getCartByUser(@PathVariable int userId) {
        return ResponseEntity.ok(cartService.getCartByUserId(userId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        cartService.deleteById(id);
        return ResponseEntity.ok("Item removed from cart with ID: " + id);
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<String> deleteCartByUser(@PathVariable int userId) {
        cartService.deleteCartByUserId(userId);
        return ResponseEntity.ok("Cart items deleted for user ID: " + userId);
    }

    @PutMapping
    public ResponseEntity<Cart> updateCart(@RequestBody Cart cart) {
        return ResponseEntity.ok(cartService.updateCart(cart));
    }
}

