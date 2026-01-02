import React from "react";
import { images } from "../../../../assets/images/images";

const NumerologyHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <img
          src={images.services.decoding}
          alt="Decoding background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
          data-aos="fade-up"
        >
          <h2 className="text-[12px] uppercase tracking-[0.5em] font-black text-[var(--color-primary)]">
            Science of Numbers
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-dark)] dark:text-white uppercase tracking-tighter leading-none">
            Your Life, Decoded by <br />{" "}
            <span className="text-[var(--color-primary)]">
              Celestial Mathematics
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Numerology is not random—it is a 메시지 messages from the universe.
            Every number carries a vibration that shapes your personality,
            destiny, and the timing of your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumerologyHero;
