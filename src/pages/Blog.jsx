import React from "react";
import MainLayout from "../components/layout/MainLayout";
import BlogHero from "../components/PagesComp/Blog/BlogHero";
import BlogGrid from "../components/PagesComp/Blog/BlogGrid";

const Blog = () => {
  return (
    <MainLayout
      title="Cosmic Blog"
      description="Read the latest insights and articles on numerology, spiritual healing, and celestial guidance."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <BlogHero />
        <BlogGrid />
      </div>
    </MainLayout>
  );
};

export default Blog;
