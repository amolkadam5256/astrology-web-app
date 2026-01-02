import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_DATA } from "../constants/siteData";

const Contact = () => {
  return (
    <MainLayout
      title="Contact Us"
      description="Get in touch with AstroGuide for personal consultations, business numerology, and more."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-6">
              <h2 className="text-[12px] uppercase tracking-[0.5em] font-black text-[#2262b2]">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter leading-none">
                Begin Your{" "}
                <span className="text-[#2262b2]">Celestial Journey</span> Today
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have questions about your Life Path or need a Business name
                correction? Our team is here to guide you through the cosmic
                frequency.
              </p>
            </div>

            <div className="space-y-8">
              {[
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
              ].map((item, i) => (
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

          <form
            data-aos="fade-left"
            className="bg-gray-50 dark:bg-[#0a0a0a] p-10 border border-gray-100 dark:border-white/5 space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-4 focus:outline-none focus:border-[#2262b2] dark:text-white transition-colors text-sm font-bold"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-4 focus:outline-none focus:border-[#2262b2] dark:text-white transition-colors text-sm font-bold"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                Service Interest
              </label>
              <select className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-4 focus:outline-none focus:border-[#2262b2] dark:text-white transition-colors text-sm font-bold appearance-none">
                <option>Select a service</option>
                <option>Personal Numerology</option>
                <option>Name Correction</option>
                <option>Business Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                How can we help?
              </label>
              <textarea
                rows="4"
                className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-4 focus:outline-none focus:border-[#2262b2] dark:text-white transition-colors text-sm font-bold"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="w-full py-5 bg-[#2262b2] text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center group hover:bg-[#1b4f91] transition-all">
              Send Message{" "}
              <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
