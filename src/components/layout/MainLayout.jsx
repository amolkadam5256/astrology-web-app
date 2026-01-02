import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
