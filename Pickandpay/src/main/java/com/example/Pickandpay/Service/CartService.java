package com.example.Pickandpay.Service;

import com.example.Pickandpay.Model.Cart;
import com.example.Pickandpay.Repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepo;

    public Cart addToCart(Cart cart) {
        return cartRepo.save(cart);
    }

    public List<Cart> getAllCartItems() {
        return cartRepo.findAll();
    }

    public List<Cart> getCartByUserId(int userId) {
        return cartRepo.findByUserId(userId);
    }

    public void deleteById(int id) {
        cartRepo.deleteById(id);
    }

    public void deleteCartByUserId(int userId) {
        cartRepo.deleteByUserId(userId);
    }

    public Cart updateCart(Cart cart) {
        Cart existing = cartRepo.findById(cart.getId())
                .orElseThrow(() -> new RuntimeException("Cart item not found"));
        existing.setProductId(cart.getProductId());
        existing.setQuantity(cart.getQuantity());
        existing.setImage(cart.getImage());
        return cartRepo.save(existing);
    }
}
