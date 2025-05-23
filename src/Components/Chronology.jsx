import React from "react";

export default function Chronology() {
  return (
    <div className="pb-5">
      <div className="">
        <div className="text-blue-950 text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold flex justify-center p-10">
          <h1>Test Flowchart</h1>
        </div>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6  text-gray-800  rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-lg font-semibold lg:text-xl">Upload Image</h3>
              <p className="mt-2 leading-6">
                Upload only high-resolution MRI <br /> brain images for accurate
                testing of <br /> the autism detection system..
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">Analysis</h3>
              <p className="mt-2 leading-6">
                Performing analysis to identify patterns and insights <br />{" "}
                within datasets, facilitating informed <br /> decision-making
                and strategic planning..
              </p>
            </div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-lg font-semibold lg:text-xl">Test Result</h3>
              <p className="mt-2 leading-6">
                Test Result: Indicates autism presence <br /> based on brain
                image analysis..
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">
                Suggestion For Consent Doctor
              </h3>
              <p className="mt-2 leading-6">
                Suggestion for Consent: Consult a doctor <br /> for professional
                interpretation and advice..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
