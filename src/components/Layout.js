// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ showNavbarAndFooter = true }) => {
  return (
    <>
      {showNavbarAndFooter && <Navbar />}

      <Outlet />

      {showNavbarAndFooter && <Footer />}
    </>
  );
};

export default Layout;
