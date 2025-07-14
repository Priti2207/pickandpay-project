package com.example.Pickandpay.Service;

import com.example.Pickandpay.Model.Wishlist;
import com.example.Pickandpay.Repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepo;

    public Wishlist addToWishlist(Wishlist wishlist) {
        return wishlistRepo.save(wishlist);
    }

    public List<Wishlist> getWishlistByUserId(int userId) {
        return wishlistRepo.findByUserId(userId);
    }

    public void removeFromWishlist(int id) {
        wishlistRepo.deleteById(id);
    }
}
