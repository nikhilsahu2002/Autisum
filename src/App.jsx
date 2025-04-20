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
import Blog from "./Pages/Blog";
import AutisichTest from "./Components/AutisichTest";
import Doctorpage from "./Pages/Doctorpage";
import FaceTest from "./Pages/FaceTest";
import Questionnaire from "./Components/Questionnaire";
import QuestionnaireStage2 from "./Components/QuestionnaireStage2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Diagnose/mritest" element={<MriTest />} />
          <Route path="/Diagnose/facetest" element={<FaceTest />} />
          {/* <Route path="/selfdignoses" element={<AutismQuiz />} /> */}
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogPost" element={<Blogpage />} />
          <Route path="/consultancy" element={<Doctorpage />} />
          <Route path="/Diagnose/questionnaire_stage_1" element={<Questionnaire />} />
          <Route path="/Diagnose/questionnaire_stage_2" element={<QuestionnaireStage2 />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
