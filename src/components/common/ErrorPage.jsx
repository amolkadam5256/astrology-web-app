import React, { useState, useEffect } from "react";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

/**
 * ErrorPage Component – displays a creative 404 / error screen.
 * Features floating particles, glitch effect, and smooth animations.
 */
const ErrorPage = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for background effect
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-[#0a0a0a] text-center p-8 transition-colors duration-300">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-2 h-2 rounded-full bg-[#2262b2] opacity-20 dark:opacity-10"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl animate-fadeIn">
        {/* Icon Container with Glowing Effect */}
        <div className="relative mb-8 inline-block">
          {/* Outer glow rings */}
          <div className="absolute inset-0 -m-8 rounded-full bg-[#2262b2]/5 dark:bg-[#4d82c6]/10 animate-pulse" />
          <div className="absolute inset-0 -m-4 rounded-full bg-[#2262b2]/10 dark:bg-[#4d82c6]/20 animate-pulse delay-75" />

          {/* Icon */}
          <div className="relative p-6 rounded-full bg-gradient-to-br from-[#d6e4f5] to-[#7fa6d9] dark:from-[#1b4f91] dark:to-[#153e72] shadow-lg">
            <AlertTriangle
              className="w-16 h-16 md:w-20 md:h-20 text-[#2262b2] dark:text-[#7fa6d9]"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* 404 Text with Glitch Effect */}
        <div className="relative mb-4">
          <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2262b2] to-[#4d82c6] dark:from-[#4d82c6] dark:to-[#7fa6d9] animate-pulse">
            404
          </h2>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 animate-slideDown">
          Oops! Lost in Space
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-[#979da6] dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed animate-slideDown delay-100">
          The page you're searching for has vanished into the digital void. It
          might have been moved, deleted, or perhaps it never existed at all.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideDown delay-200">
          <a
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-[#2262b2] hover:bg-[#1b4f91] dark:bg-[#4d82c6] dark:hover:bg-[#2262b2] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span className="font-semibold">Go Home</span>
          </a>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#0a0a0a] border-2 border-[#2262b2] dark:border-[#4d82c6] text-[#2262b2] dark:text-[#4d82c6] rounded-full transition-all duration-300 hover:bg-[#d6e4f5] dark:hover:bg-[#153e72] hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">Go Back</span>
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }
        .delay-75 {
          animation-delay: 0.075s;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default ErrorPage;
