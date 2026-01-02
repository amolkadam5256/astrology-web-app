import React from "react";

const SoulPathContent = () => {
  return (
    <div className="w-full lg:w-1/2" data-aos="fade-right">
      <h1 className="text-4xl md:text-5xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-8">
        Your Soul's <span className="text-[var(--color-primary)]">Vocation</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        Unlock the professional path that aligns with your spiritual purpose. We
        help you choose a career that not only brings financial success but also
        matches your internal frequency.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {[
          "Career Mapping",
          "Soul Calling",
          "Skill Alignment",
          "Growth Strategy",
        ].map((p, i) => (
          <div
            key={i}
            className="p-4 bg-gray-50 dark:bg-white/5 font-black uppercase text-[10px] tracking-widest text-[var(--color-primary)] border border-gray-100 dark:border-white/10 text-center"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoulPathContent;
