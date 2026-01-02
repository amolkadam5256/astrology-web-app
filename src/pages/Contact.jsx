import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ContactInfo from "../components/PagesComp/Contact/ContactInfo";
import ContactForm from "../components/PagesComp/Contact/ContactForm";

const Contact = () => {
  return (
    <MainLayout
      title="Contact Us"
      description="Get in touch with AstroGuide for personal consultations, business numerology, and more."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
