import React from "react";
import { Outlet } from "react-router";
import Navbar from "../features/shared/components/Navbar.jsx";

import Footer from "../features/shared/components/Footer.jsx";
import { CartProvider } from "../features/product/context/CartContext.jsx";
import CartSlider from "../features/shared/components/Cartslider.jsx";
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
