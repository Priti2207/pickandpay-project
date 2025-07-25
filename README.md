# 📦 Project Name: Pick and Pay E-Commerce Platform
# 📝 Description
Pick and Pay is a full-stack e-commerce platform that allows users to browse electronic products, register/login, manage their cart and wishlist, and place orders. Admins can manage product listings and view all orders.

# 🛠️ Tech Stack
Layer	Technology Used
Frontend	Angular, HTML, CSS
Backend	Spring Boot (Java)
Database	MySQL
Tools	Postman, Git, Maven

# 🔐 Features
✅ User Registration & Login
🛍️ Product Listing by Category (Mobiles, Laptops, Cameras)
❤️ Wishlist & Cart Functionality
🧾 Order Placement
👨‍💻 Admin Panel for Product Management
🔄 CRUD operations via REST API
📷 Product Images
🌐 Responsive UI (Angular)

# 📁 Project Structure
bash
Copy
Edit
pickandpay/
├── backend/                # Spring Boot app
│   ├── controller/
│   ├── model/
│   ├── repository/
│   ├── service/
│   └── application.properties
├── frontend/               # Angular app
│   ├── src/app/
│   │   ├── user/
│   │   ├── product/
│   │   ├── cart/
│   │   ├── wishlist/
│   │   └── order/
└── README.md
# 🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/pickandpayproject.git
cd pickandpayproject
2. Backend Setup (Spring Boot)
Open the /backend folder in your IDE.
Configure application.properties with your MySQL DB credentials:
properties
Copy
Edit
spring.datasource.url=jdbc:mysql http://localhost:8080/pickandpay
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
Run PickandpayApplication.java.
3. Frontend Setup (Angular)
bash
Copy
Edit
cd frontend
npm install
ng serve
Navigate to http://localhost:4200/


# 🎯 API Endpoints (Sample)
Endpoint	Method	Description
/api/user/register	POST	Register a user
/api/user/login	POST	Login user
/api/products	GET	Get all products
/api/cart/{userId}	GET	View user 
/api/order/place	POST	Place an order

# 📷 Screenshots

# Homepage
![image alt](https://github.com/Priti2207/pickandpay-project/blob/21efb1fc11bbe097e8be87dff770bc2c26a7564c/Screenshot%202025-07-14%20171201.png)
# Login/Register
![image alt](https://github.com/Priti2207/pickandpay-project/blob/82fc7941b67c12bdd6ad7d5880403ecc449def05/Screenshot%202025-07-07%20203513.png)
# Admin dashboard
![image alt](https://github.com/Priti2207/pickandpay-project/blob/57c8e5013c8c2db65f791c7df8ea62d82da78102/Screenshot%202025-07-14%20151346.png)
# product page
![image alt](https://github.com/Priti2207/pickandpay-project/blob/64e5b0be92f936a30182dd3ce24fab356873ac22/Screenshot%202025-07-14%20151500.png)
# wishlist page
![image alt](https://github.com/Priti2207/pickandpay-project/blob/4be1b46f4288fdced8f0057c73ad4b77fdb2d440/Screenshot%202025-07-14%20151251.png)
# cart page
![image alt](https://github.com/Priti2207/pickandpay-project/blob/9b1ebcc4acfd4df8a13b4428e28ee8185ffdd478/Screenshot%202025-07-14%20151314.png)
# admin dashboard page
![image alt](https://github.com/Priti2207/pickandpay-project/blob/2653bc3c8873584d176b9c40b570c6f9f22e604a/Screenshot%202025-07-14%20151429.png)



# 🙋‍♀️ Author
Priti Gore
GitHub: https://github.com/Priti2207

