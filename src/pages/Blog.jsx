import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Clock, ArrowRight } from "lucide-react";
import { images } from "../assets/images/images";

const Blog = () => {
  const posts = [
    {
      title: "How Your Life Path Number Influences Your Career Choice",
      date: "Oct 12, 2025",
      category: "Career",
      excerpt:
        "Discover the hidden connection between your birth date and professional fulfillment...",
    },
    {
      title: "The Power of Name Correction for Business Success",
      date: "Sep 28, 2025",
      category: "Business",
      excerpt:
        "Changing just one letter in your brand name can shift the energy from stagnation to rapid growth...",
    },
  ];

  return (
    <MainLayout
      title="Cosmic Blog"
      description="Read the latest insights and articles on numerology, spiritual healing, and celestial guidance."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2
          data-aos="fade-up"
          className="text-[12px] uppercase tracking-[0.5em] font-black text-[#2262b2] mb-4 text-center"
        >
          Celestial Journal
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter text-center mb-16"
        >
          Latest <span className="text-[#2262b2]">Cosmic Insights</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={idx * 100}
            >
              <div className="aspect-video bg-gray-100 dark:bg-white/5 overflow-hidden border border-gray-200 dark:border-white/10 mb-8 relative group">
                <img
                  src={images.placeholders.blog}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
                  <span className="text-[#2262b2]">{post.category}</span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {post.date}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-[#0a0a0a] dark:text-white leading-tight group-hover:text-[#2262b2] transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[#2262b2] font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
