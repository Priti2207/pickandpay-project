import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Product } from './product/product';
import { Cart } from './cart/cart';
import { Wishlist } from './wishlist/wishlist';
import { AdminRegister } from './adminregister/adminregister';
import { AdminLogin } from './adminlogin/adminlogin';
import { AdminDashboard } from './admindashboard/admindashboard';
import { Order } from './order/order';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
  { path: 'product/', component: Product },
  { path: 'product/:id', component: Product },
  { path: 'products', component: Product },
  { path: 'products/category/:category', component: Product },  // ✅ Add this line
  { path: 'wishlist', component: Wishlist },
  { path: 'order', component: Order },
  { path: 'adminregister', component: AdminRegister },
  { path: 'adminlogin', component: AdminLogin },
  { path: 'admindashboard', component: AdminDashboard },
  { path: 'cart', component: Cart },
  { path: 'cart/:id', component: Cart },
  { path: 'carts', component: Cart }
];
