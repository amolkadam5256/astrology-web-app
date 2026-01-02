import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE_DATA } from "../../../constants/siteData";

const ContactInfo = () => {
  const contactItems = [
    { icon: Mail, label: "Email Us", val: SITE_DATA.contact.email },
    {
      icon: Phone,
      label: "Call Support",
      val: SITE_DATA.contact.phone,
    },
    {
      icon: MapPin,
      label: "Office Location",
      val: SITE_DATA.contact.address,
      maxW: "max-w-xs",
    },
  ];

  return (
    <div className="space-y-12" data-aos="fade-right">
      <div className="space-y-6">
        <h2 className="text-[12px] uppercase tracking-[0.5em] font-black text-[#2262b2]">
          Get In Touch
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter leading-none">
          Begin Your <span className="text-[#2262b2]">Celestial Journey</span>{" "}
          Today
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Have questions about your Life Path or need a Business name
          correction? Our team is here to guide you through the cosmic
          frequency.
        </p>
      </div>

      <div className="space-y-8">
        {contactItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center space-x-6 group"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-[#2262b2]/5 border border-[#2262b2]/20 text-[#2262b2] group-hover:bg-[#2262b2] group-hover:text-white transition-all">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                {item.label}
              </p>
              <p
                className={`font-bold text-[#0a0a0a] dark:text-white ${
                  item.maxW || ""
                }`}
              >
                {item.val}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
