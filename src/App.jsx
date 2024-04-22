import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import FooterBlock from "./Components/FooterBlock";
import ContentSection from "./Components/ContentSection";
import TestimonialSection from "./Components/TestimonialSection";
import Features from "./Components/FeatureItem";
import BlogSection from "./Components/BlogCard";
import Home from "./Pages/Home";
import MriTest from "./Pages/MriTest";
import Blogpage from "./Pages/Blogpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AutismQuiz from "./Components/AutismQuiz";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mritest" element={<MriTest />} />
          <Route path="/selfdignoses" element={<AutismQuiz />} />
          <Route path="/Blog" element={<Blogpage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
