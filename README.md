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
spring.datasource.url=jdbc:mysql://localhost:8080/pickandpay
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
Add screenshots of your UI here, like:
# Homepage

# Login/Register
![image alt](https://github.com/Priti2207/pickandpay-project/blob/82fc7941b67c12bdd6ad7d5880403ecc449def05/Screenshot%202025-07-07%20203513.png)
# Admin dashboard

# product page

# wishlist page

# cart page

# order page




# 🙋‍♀️ Author
Priti Gore
GitHub: https://github.com/Priti2207

