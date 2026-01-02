import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ContactInfo from "../components/PagesComp/Contact/ContactInfo";
import ContactForm from "../components/PagesComp/Contact/ContactForm";

const Contact = () => {
  return (
    <MainLayout
      title="Contact AstroGuide | Expert Numerology Consultation"
      description="Reach out to AstroGuide for personal numerology consultations, business name corrections, and spiritual guidance. We are here to help you navigate your destiny."
      keywords="Contact AstroGuide, Numerology Consultation, Business Name Correction, Spiritual Guidance, Astrology Support"
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
