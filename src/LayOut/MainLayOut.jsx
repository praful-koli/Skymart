import React from "react";
import { Outlet } from "react-router";
import Navbar from "../features/shared/components/NavBar";
import Footer from "../features/shared/components/Footer";

const MainLayOut = () => {
  return (
    <div className="w-full">
        <Navbar/>
      <div className="w-full ">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayOut;
