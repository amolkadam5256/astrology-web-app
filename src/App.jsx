import React from "react";
import MainLayout from "./components/layout/MainLayout";
import "./App.css";

const App = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-[#0a0a0a] dark:text-white mb-6">
          Welcome to AstroGuide
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Your personal guide to the stars. Explore our services and discover
          what the cosmos has in store for you.
        </p>
      </div>
    </MainLayout>
  );
};

export default App;
