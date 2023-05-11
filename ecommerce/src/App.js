import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage.js';
import CartPage from "./pages/CartPage/CartPage.js";
import LoginPage from './pages/LoginPage/LoginPage.js';
import RegisterPage from './pages/RegisterPage/RegisterPage.js';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.js';
import ProductListPage from "./pages/ProductListPage/ProductListPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element= "Page not exists 404 "   />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
