package com.example.Pickandpay.Service;

import com.example.Pickandpay.Model.Product;
import com.example.Pickandpay.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    // ✅ Add a new product
    public Product addProduct(Product product) {
        try {
            return productRepo.save(product);
        } catch (Exception e) {
            System.out.println("Error while saving product: " + e.getMessage());
            throw new RuntimeException("Failed to save product: " + e.getMessage());
        }
    }

    // ✅ Get all products
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    // ✅ Get products by category
    public List<Product> getProductsByCategory(String category) {
        return productRepo.findByCategoryIgnoreCase(category);
    }

    // ✅ Get product by ID
    public Product getProductById(Long id) {
        return productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + id));
    }

    // ✅ Update product (added category)
    public Product updateProduct(Long id, Product updatedProduct) {
        Product existing = productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + id));

        existing.setName(updatedProduct.getName());
        existing.setDescription(updatedProduct.getDescription());
        existing.setPrice(updatedProduct.getPrice());
        existing.setQuantity(updatedProduct.getQuantity());
        existing.setImage(updatedProduct.getImage());
        existing.setCategory(updatedProduct.getCategory()); // ✅ ADD THIS LINE

        return productRepo.save(existing);
    }

    // ✅ Delete product
    public void deleteProduct(Long id) {
        if (!productRepo.existsById(id)) {
            throw new RuntimeException("Product not found with ID: " + id);
        }
        productRepo.deleteById(id);
    }
}
