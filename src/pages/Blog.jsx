import React from "react";
import MainLayout from "../components/layout/MainLayout";
import BlogHero from "../components/PagesComp/Blog/BlogHero";
import BlogGrid from "../components/PagesComp/Blog/BlogGrid";

import RelatedServices from "../components/PagesComp/Numerology/Common/RelatedServices";

const Blog = () => {
  return (
    <MainLayout
      title="Cosmic Blog | Numerology & Spiritual Insights"
      description="Explore the latest articles on numerology, spiritual healing, and planetary alignments. Stay updated with AstroGuide's cosmic wisdom and practical tips for life."
      keywords="Cosmic Blog, Numerology Articles, Spiritual Insights, Planetary Alignments, Astrology Blog"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <BlogHero />
        <BlogGrid />
      </div>
      <RelatedServices currentPath="/blog" />
    </MainLayout>
  );
};

export default Blog;
