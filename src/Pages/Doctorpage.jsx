import React from "react";
import { Navbar } from "../Components/Navbar";
import Consult from "../Components/Consult";

export default function Doctorpage() {
  return (
    <div>
      <Navbar />
      <div className="absolute top-0 inset-x-0 h-64 flex items-start ">
        <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
      </div>
      <h1 className=" text-5xl justify-center flex font-extrabold mb-5 p-20">
        Doctor consultancy
      </h1>
      <Consult />
    </div>
  );
}
