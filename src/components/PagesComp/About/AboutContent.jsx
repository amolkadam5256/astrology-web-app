import React from "react";

const AboutContent = () => {
  return (
    <div className="space-y-8" data-aos="fade-right">
      <h2 className="text-4xl font-black text-[var(--color-dark)] dark:text-white uppercase tracking-tighter">
        The Wisdom Behind <span className="text-[var(--color-primary)]">AstroGuide</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium italic">
        "Numbers are the highest degree of knowledge. It is knowledge itself." —
        Plato
      </p>
      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        <p>
          AstroGuide was founded on the principle that the universe is
          mathematically structured. Our mission is to empower individuals to
          navigate their lives with clarity by understanding the deep energetic
          frequencies hidden within their birth dates and names.
        </p>
        <p>
          Led by Ms. Sheethal R, a seasoned Numerologist with over 17 years of
          experience, we blend technical precision with spiritual intuition. Our
          expertise spans from Personal Numerology to the specialized BRAVE
          program for career success.
        </p>
      </div>
      <div className="pt-4" data-aos="zoom-in" data-aos-delay="400">
        <div className="border-l-4 border-[var(--color-primary)] pl-6 py-2">
          <p className="font-black text-[var(--color-dark)] dark:text-white uppercase tracking-widest text-sm">
            Founded in 1977
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            A legacy of celestial wisdom continued by Ms. Sheethal R.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
