import React from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
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
        <div className="relative">
          <textarea
            rows="4"
            className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-4 focus:outline-none focus:border-[#2262b2] dark:text-white transition-colors text-sm font-bold"
            placeholder="Your message..."
          ></textarea>
        </div>
      </div>
      <button className="w-full py-5 bg-[#2262b2] text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center group hover:bg-[#1b4f91] transition-all">
        Send Message{" "}
        <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
};

export default ContactForm;
