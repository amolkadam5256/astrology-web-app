import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";

/**
 * Floating WhatsApp Icon Component
 * Creative, animated button with tooltip, breathing animation, and micro-interactions.
 * Uses your brand colors with dark/light mode support.
 */
const WhatsAppFloating = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Show tooltip briefly on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open WhatsApp chat"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-[#25D366] dark:bg-[#128C7E] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <WhatsApp className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          {/* Small notification badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip Message */}
      <div
        className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ${
          showTooltip || isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="relative bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl px-4 py-3 mr-2 border border-gray-200 dark:border-gray-700 min-w-[200px]">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>

          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
            Need help?
          </p>
          <p className="text-xs text-[#979da6] dark:text-gray-400">
            Chat with us on WhatsApp
          </p>

          {/* Triangle pointer */}
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-[#1a1a1a] border-r border-b border-gray-200 dark:border-gray-700" />
        </div>
      </div>

      {/* Main Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative block group"
        aria-label="Chat on WhatsApp"
      >
        {/* Animated ripple rings */}
        <div className="absolute inset-0 -m-2">
          <div className="absolute inset-0 bg-[#25D366] dark:bg-[#128C7E] rounded-full opacity-20 animate-ping" />
          <div
            className="absolute inset-0 bg-[#25D366] dark:bg-[#128C7E] rounded-full opacity-20 animate-ping"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Outer glow ring */}
        <div className="absolute -inset-3 bg-gradient-to-r from-[#25D366]/30 to-[#128C7E]/30 dark:from-[#128C7E]/40 dark:to-[#25D366]/40 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Main button container */}
        <div className="relative">
          {/* Button */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] dark:from-[#128C7E] dark:to-[#075E54] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <MessageSquare
              className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110"
              strokeWidth={2.5}
            />
          </div>

          {/* Notification dot */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#0a0a0a] animate-bounce" />
        </div>

        {/* Minimize button (appears on hover) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsMinimized(true);
          }}
          className="absolute -top-2 -left-2 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <X className="w-3 h-3 text-gray-600 dark:text-gray-300" />
        </button>
      </a>

      {/* CSS for ping animation with delay */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFloating;
