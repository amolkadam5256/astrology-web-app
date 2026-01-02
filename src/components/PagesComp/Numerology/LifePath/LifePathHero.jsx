import React from "react";

const LifePathHero = () => {
  return (
    <section className="relative py-20 bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1
          className="text-3xl md:text-5xl font-black text-[var(--color-dark)] dark:text-white uppercase tracking-tighter mb-6"
          data-aos="fade-up"
        >
          Life Path & <span className="text-[var(--color-primary)]">Destiny</span>
        </h1>
        <p
          className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 font-medium leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your life is a sequence of vibrations. By decoding your birth date and
          name, we uncover the spiritual roadmap of your soul's journey.
        </p>
      </div>
    </section>
  );
};

export default LifePathHero;
