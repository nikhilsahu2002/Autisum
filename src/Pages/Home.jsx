import React from "react";
// import axios from "axios";
import Navbar from "../Components/Navbar";
import FooterBlock from "../Components/FooterBlock";
import Features from "../Components/FeatureItem";
import BlogSection from "../Components/BlogCard";
import FAQSection from "../Components/FAQSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Features />
      <FAQSection />
      <BlogSection />
      <FooterBlock />
    </div>
  );
}
