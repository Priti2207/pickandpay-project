package com.example.Pickandpay.Service;
import com.example.Pickandpay.Model.Admin;
import com.example.Pickandpay.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    public Admin register(Admin admin) {
        if (adminRepo.findByEmail(admin.getEmail()) != null) {
            throw new RuntimeException("Admin already exists");
        }
        return adminRepo.save(admin);
    }

    public Admin login(String email, String password) {
        Admin admin = adminRepo.findByEmail(email);
        if (admin == null || !admin.getPassword().equals(password)) {
            throw new RuntimeException("Invalid credentials");
        }
        return admin;
    }

    public Admin getById(Long id) {
        return adminRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
    }
}
