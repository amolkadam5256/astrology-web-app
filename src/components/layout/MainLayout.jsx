import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../common/SEO";

const MainLayout = ({ children, title, description, keywords, ogImage }) => {
  return (
    <div className="min-h-screen transition-colors duration-300 flex flex-col">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      <Navbar />
      <main className="pt-18 grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
