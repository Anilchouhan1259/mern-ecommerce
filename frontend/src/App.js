import Navbar from "./components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";
import PostProduct from "./Pages/PostProduct";
import ShopPage from "./Pages/ShopPage";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import Login from "./Pages/Login";
import CheckoutPage from "./Pages/CheckoutPage";
import Success from "./components/Success";
import ProfilePage from "./Pages/ProfilePage";
import Orders from "./components/Orders";
import ShippingAddressPage from "./Pages/ShippingAddressPage";
import ShipmentTracker from "./components/ShipmentTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="font-Montserrat tracking-tight text-black bg-blue- ">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/postproducts" element={<PostProduct />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/track" element={<ShipmentTracker />}></Route>
          <Route path="/address" element={<ShippingAddressPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
