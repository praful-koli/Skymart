import React from "react";
import { Outlet } from "react-router";
import Navbar from "../features/shared/components/NavBar";
import Footer from "../features/shared/components/Footer";
import { CartProvider } from "../features/product/context/CartContext.jsx";
import CartSlider from "../features/shared/components/Cartslider";
const MainLayOut = () => {
  return (
    <CartProvider>
      <div className="w-full">
        <Navbar />
        <div className="w-full ">
          <Outlet />
        </div>
         <CartSlider />  
        <Footer />
      </div>
    </CartProvider>
  );
};

export default MainLayOut;
