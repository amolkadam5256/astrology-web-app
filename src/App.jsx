import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppFloating from "./components/common/WhatsAppFloating";

// General Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NumerologyMain from "./pages/Numerology"; // Existing general numerology page

// Numerology Sub-pages
import NumerologyIntro from "./pages/numerology/Intro";
import LifePath from "./pages/numerology/LifePath";
import Personality from "./pages/numerology/Personality";
import NameCorrection from "./pages/numerology/NameCorrection";
import BabyName from "./pages/numerology/BabyName";
import BusinessName from "./pages/numerology/BusinessName";
import LuckyDates from "./pages/numerology/LuckyDates";
import Property from "./pages/numerology/Property";

// Services Sub-pages
import AngelCards from "./pages/services/AngelCards";
import SoulPath from "./pages/services/SoulPath";
import BraveProgram from "./pages/services/BraveProgram";
import Healing from "./pages/services/Healing";
import VastuOffice from "./pages/services/VastuOffice";

// Error Page
import ErrorPage from "./components/common/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Numerology Routes */}
        <Route path="/numerology" element={<NumerologyMain />} />
        <Route path="/numerology/intro" element={<NumerologyIntro />} />
        <Route path="/numerology/life-path" element={<LifePath />} />
        <Route path="/numerology/personality" element={<Personality />} />
        <Route path="/numerology/name" element={<NameCorrection />} />
        <Route path="/numerology/baby-name" element={<BabyName />} />
        <Route path="/numerology/business" element={<BusinessName />} />
        <Route path="/numerology/lucky-dates" element={<LuckyDates />} />
        <Route path="/numerology/property" element={<Property />} />

        {/* Services Routes */}
        <Route path="/services/angel-cards" element={<AngelCards />} />
        <Route path="/services/soul-path" element={<SoulPath />} />
        <Route path="/services/brave" element={<BraveProgram />} />
        <Route path="/services/healing" element={<Healing />} />
        <Route path="/services/vastu-office" element={<VastuOffice />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <WhatsAppFloating />
    </Router>
  );
};

export default App;
