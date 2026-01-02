import React, { useEffect, useState } from "react";
import { images } from "../../../assets/images/images";
import { MousePointer2, Sparkles, Star, Moon, Sun } from "lucide-react";

/**
 * HomeHero - A creative, highly responsive, and interactive hero section.
 * Features parallax effects, dynamic star fields, and a rotating zodiac wheel.
 */
const HomeHero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-[#050a15] pt-16 lg:pt-0">
      {/* --- Cosmic Layers --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* nebula/starry background */}
        <div
          className="absolute inset-[-10%] opacity-40 mix-blend-screen transition-transform duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * -0.5}px, ${
              mousePos.y * -0.5
            }px) scale(1.1)`,
            backgroundImage: `url(${images.hero.astrologyBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Animated Grid / Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

        {/* Dynamic Glowing Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2262b2]/10 rounded-full blur-[120px] animate-pulse pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 0.8}px, ${
              mousePos.y * 0.8
            }px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff7e33]/5 rounded-full blur-[100px] pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * -0.3}px, ${
              mousePos.y * -0.3
            }px)`,
          }}
        ></div>

        {/* Global Masks */}
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-transparent via-[#050a15]/40 to-[#050a15]"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#050a15] via-transparent to-[#050a15]"></div>
      </div>

      {/* --- Floating Particles --- */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 w-full py-2 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4 items-center">
          {/* --- LEFT: Narrative & CTA --- */}
          <div className="text-left space-y-8 max-w-2xl mx-auto lg:mx-0 lg:pr-10">
            {/* Tag / Badge */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl group hover:bg-white/10 transition-all cursor-default"
            >
              <Sparkles size={14} className="text-[#ff7e33] animate-pulse" />
              <span className="text-[#ff7e33] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                Celestial Guidance Daily
              </span>
            </div>

            {/* Typography Masterpiece */}
            <div className="space-y-4">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center space-x-4 opacity-70"
              >
                <div className="w-12 h-px bg-white/30 hidden sm:block"></div>
                <h4 className="text-white/80 font-bold text-sm sm:text-base tracking-[0.3em] uppercase">
                  Unveil Your Destiny
                </h4>
              </div>

              <h1
                className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-white leading-[1.05] tracking-tighter"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Read Your <br />
                <span className="relative inline-block overflow-hidden lg:overflow-visible group pb-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-white via-white/90 to-[#ff7e33]/70 drop-shadow-sm transition-transform duration-500 inline-block ">
                    Daily Horoscope
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff7e33] rounded-full scale-x-50 origin-left group-hover:scale-x-100 transition-transform duration-700"></div>
                </span>
                <br />
                Today
              </h1>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-400 text-base sm:text-sm md:text-lg max-w-xl leading-relaxed font-medium"
            >
              Step into the cosmic stream where ancient wisdom meets current
              planetary alignments.
              <span className="text-white/90 font-bold">
                {" "}
                Precise. Personal. Powerful.
              </span>
              Your roadmap through the stars starts here.
            </p>

            {/* Buttons with Hover Interaction */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-5 pt-6"
            >
              <button className="group relative px-10 py-5 bg-[#ff7e33] text-white font-black uppercase tracking-[0.2em] text-[11px] sm:text-xs hover:shadow-[0_0_50px_rgba(255,126,51,0.4)] transition-all overflow-hidden active:scale-95">
                <span className="relative z-10 flex items-center justify-center">
                  Get Free Reading{" "}
                  <MousePointer2 className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              </button>

              <button className="px-10 py-5 border-2 border-white/10 text-white font-black uppercase tracking-[0.2em] text-[11px] sm:text-xs hover:bg-white hover:text-[#050a15] hover:border-white transition-all active:scale-95 flex items-center justify-center">
                Explore Services
              </button>
            </div>
          </div>

          {/* --- RIGHT: Interactive Celestial Wheel --- */}
          <div
            className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-0"
            data-aos="zoom-in"
            data-aos-delay="500"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Visual Depth Elements */}
            <div className="absolute w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] bg-[#2262b2]/15 rounded-full blur-[100px] animate-pulse"></div>

            {/* The Main Graphic */}
            <div className="relative w-full max-w-[550px] aspect-square group">
              {/* Orbital Rings */}
              <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-[-20px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

              {/* Floating Icons on Orbit */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50px] text-white/20 animate-bounce">
                <Moon size={24} />
              </div>
              <div className="absolute bottom-1/2 right-0 translate-x-[40px] translate-y-1/2 text-[#ff7e33]/30 animate-pulse delay-500">
                <Sun size={28} />
              </div>

              {/* The Rotating Zodiac Wheel */}
              <div className="w-full h-full animate-[spin_100s_linear_infinite] will-change-transform filter drop-shadow-[0_0_40px_rgba(34,98,178,0.3)] transition-all duration-700 hover:scale-[1.05] hover:brightness-125">
                <img
                  src={images.hero.zodiacWheel}
                  alt="Zodiac Wheel"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Interactive Scan Line */}
              <div className="absolute inset-0 bg-conic-[#ff7e33]/10 to-transparent rounded-full animate-[spin_6s_linear_infinite] pointer-events-none"></div>
            </div>

            {/* Center Eye / Sun Core */}
            <div className="absolute w-24 h-24 bg-[#050a15] rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.7)] group">
              <div className="absolute inset-0 bg-[#ff7e33]/5 animate-pulse rounded-full"></div>
              <div className="w-16 h-16 border border-[#ff7e33]/40 rounded-full animate-ping opacity-30"></div>
              <Star
                size={32}
                className="text-[#ff7e33] animate-spin-slow drop-shadow-[0_0_10px_rgba(255,126,51,0.5)]"
              />
              <div className="absolute inset-0 border-2 border-white/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#050a15] to-transparent z-15 pointer-events-none"></div>

      {/* CSS For Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default HomeHero;
