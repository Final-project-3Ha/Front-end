import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Public Pages

import HomePage from "./pages/HomePage/HomePage.js";
import CartPage from "./pages/CartPage/CartPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.js";
import ProductListPage from "./pages/ProductListPage/ProductListPage.js";

// Protected Component

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent/ProtectedRoutesComponent";

// Protected Users Pages

import UserCartDetailsPage from "./pages/User/UserCartDetailsPage.js";
import UserOrderDetailsPage from "./pages/User/UserOrderDetailsPage.js";
import UserOrdersPage from "./pages/User/UserOrdersPage.js";
import UserProfilePage from "./pages/User/UserProfilePage.js";

// Protected Admin Pages

import AdminUserPages from "./pages/Admin/AdminUserPage.js";
import AdminEditUserPages from "./pages/Admin/AdminEditUserPage";
import AdminAnalyticsPage from "./pages/Admin/AdminAnalyticsPage.js";
import AdminChartsPage from "./pages/Admin/AdminChartsPage.js";
import AdminCreateProductPage from "./pages/Admin/AdminCreateProductPage.js";
import AdminEditProductPage from "./pages/Admin/AdminEditProductPage.js";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage.js";
import AdminOrdersPage from "./pages/Admin/AdminOrdersPage.js";
import AdminProductsPage from "./pages/Admin/AdminAnalyticsPage";

// All the components

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// User component

import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<RoutesWithUserChatComponent />}>
            {/* Public Routes */}

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product-details" element={<ProductDetailsPage />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element="Page not exists 404 " />
          </Route>

            {/* User Protected Routes */}

            <Route element={<ProtectedRoutesComponent admin={false} />}>
              <Route path="/user" element={<UserProfilePage />} />
              <Route path="/user/my-orders" element={<UserOrdersPage />} />
              <Route
                path="/user/cart-details"
                element={<UserCartDetailsPage />}
              />
              <Route
                path="/user/order-details"
                element={<UserOrderDetailsPage />}
              />
            </Route>

          {/* Admin Protected Routes */}

          <Route element={<ProtectedRoutesComponent admin={true} />}>
            <Route path="/admin/users" element={<AdminUserPages />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPages />} />
            <Route path="/admin/product" element={<AdminProductsPage />} />
            <Route
              path="/admin/create-new-product"
              element={<AdminCreateProductPage />}
            />
            <Route
              path="/admin/edit-product"
              element={<AdminEditProductPage />}
            />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route
              path="/admin/order-details"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/chats" element={<AdminChartsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
