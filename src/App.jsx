import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SelectShopPage from "./components/SelectShopPage";
import ShopDetail from "./components/ShopDetail";
import MyCart from "./components/MyCart";
import OrderConfirm from "./components/OrderConfirm";
import MyOrders from "./components/myorder";
import ProfilePage from "./components/ProfilePage";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [cartCount] = useState(2);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shops" element={<SelectShopPage cartCount={cartCount} />} />
        <Route path="/shop/:shopId" element={<ShopDetail />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order-confirm" element={<OrderConfirm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </HashRouter>
  );
}
