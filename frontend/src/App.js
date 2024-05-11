import Navbar from "./components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";
import PostProduct from "./Pages/PostProduct";
import ShopPage from "./Pages/ShopPage";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import Login from "./Pages/Login";
import Skeleton from "./components/ui/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="font-Montserrat text-black ">
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
          <Route path="/skeleton" element={<Skeleton />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
