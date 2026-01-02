import React, { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Testimonial Section with Carousel
 * Designed for a premium Numerology/Astrology brand.
 */
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Entrepreneur",
      text: "The name correction analysis was life-changing! Within three months of aligning my business name vibration, I saw a 40% increase in client inquiries. Highly recommended for any business owner.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Architect",
      text: "I was skeptical about numerology until my Life Path Reading. It was like someone had read my soul's blueprint. It helped me understand my natural strengths and navigate a difficult career transition with confidence.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=michael",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Wellness Coach",
      text: "Choosing my newborn's name through this service gave me such peace of mind. The consultation was deep, insightful, and handled with so much care. My baby is thrive, and the name feels so right.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=elena",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Real Estate Investor",
      text: "The Property Numerology service helped me select my last three investment properties. The energy of the spaces feels aligned, and the transactions have been incredibly smooth. A secret weapon for success!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=james",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-[#050a15]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h4
            data-aos="fade-up"
            className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs"
          >
            Client Stories
          </h4>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none"
          >
            Voices of <span className="text-primary">Destiny</span> Fulfilled
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium"
          >
            Join thousands of individuals who have unlocked their potential
            through the power of celestial wisdom and numerical alignment.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Main Card */}
          <div
            className="relative bg-gray-50 dark:bg-dark border border-gray-100 dark:border-white/5 p-6 md:p-10 shadow-xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon Background */}
            <Quote className="absolute top-6 left-6 w-16 h-16 text-primary/5 pointer-events-none" />

            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              {/* Image & Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white dark:border-white/5 overflow-hidden shadow-lg ring-2 ring-primary/20">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full shadow-lg">
                    <Quote size={10} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-black text-dark dark:text-white uppercase tracking-tight">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest leading-none">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="space-y-4 grow">
                <div className="flex gap-0.5 justify-center md:justify-start">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-orange-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <blockquote className="text-sm md:text-base text-gray-700 dark:text-gray-200 font-medium italic leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                <div className="flex items-center gap-6 pt-2 justify-center md:justify-start">
                  {/* Indicators */}
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "w-6 bg-primary"
                            : "bg-gray-300 dark:bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-10 right-0 flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-dark border border-gray-100 dark:border-white/5 text-dark dark:text-white hover:bg-primary hover:text-white transition-all shadow-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-dark border border-gray-100 dark:border-white/5 text-dark dark:text-white hover:bg-primary hover:text-white transition-all shadow-md"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
