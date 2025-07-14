package com.example.Pickandpay.Service;

import com.example.Pickandpay.Model.Order;
import com.example.Pickandpay.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order placeOrder(Order order) {
        if (order.getQuantity() <= 0 || order.getPrice() <= 0) {
            throw new RuntimeException("Invalid order quantity or price");
        }
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public String deleteOrder(Long orderId) {
        if (orderRepository.existsById(orderId)) {
            orderRepository.deleteById(orderId);
            return "Order deleted with ID: " + orderId;
        } else {
            throw new RuntimeException("Order not found with ID: " + orderId);
        }
    }
}
