import React from "react";
import { BackgroundBlogCard } from "./BackgroundBlogCard";
import { Navbar } from "./Navbar";
// import { test } from "../assets/test.img";
import img from "../assets/146.jpg";
import img2 from "../assets/3jh2_cwqz_220217.jpg";
import img3 from "../assets/img.avif";

export default function AutisichTest() {
  return (
    <div>
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
      </div>
      <Navbar />

      <div className="container grid lg:grid-cols-3 sm:grid-cols-1 pt-20">
        <div className="form flex justify-center p-10 ">
          <BackgroundBlogCard
            url={img}
            link="/selfdignoses"
            dsc=" Self Assessment Test Througth The Manual Test Form"
          />
        </div>
        <div className="mri flex justify-center p-10 items-center">
          <BackgroundBlogCard
            url={img2}
            link="/mritest"
            dsc="Tested by our trusted machine testing, which will happen on your MRI image"
          />
        </div>
        <div className="mri flex justify-center p-10 items-center">
          <BackgroundBlogCard
            url={img3}
            link="/facetest"
            dsc="Tested by our trusted machine testing, which will happen on your Face image"
          />
        </div>
      </div>
    </div>
  );
}
