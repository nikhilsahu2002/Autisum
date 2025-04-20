import React, { useState } from "react";
import axios from "axios";
import Chronology from "../Components/Chronology";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import FooterBlock from "../Components/FooterBlock";

export default function FaceTest() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        // "https://autisiumbackend.onrender.com/predict/",
        "https://nikhil.sbs/predict/",
        // "http://localhost:8000/predict/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setShowDialog(true);
      setResult(response.data.autistic);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <Navbar />
    <div className="pt-16 pb-16">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
      </div>
      <h1 className="text-blue-950 text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold flex justify-center">
        Face Image Test
      </h1>
      <p className="text-center text-xl text-gray-600 mt-4">
        Upload a face image for autism analysis or choose other image processing
        tasks:
      </p>

      <Chronology />

      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-2 text-center text-blue-700">
            Autism Detection
          </h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            Upload a clear facial image to check for early signs of autism spectrum disorder. Our AI model will analyze the photo and return potential indicators.
          </p>

          <div className="container">
            <div
              className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6"
              id="dropzone"
            >
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 z-50"
              />
              <div className="text-center">
                <img
                  className="mx-auto h-12 w-12"
                  src="https://www.svgrepo.com/show/357902/image-upload.svg"
                  alt=""
                />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  <label htmlFor="fileInput" className="relative cursor-pointer">
                    <span>Drag and drop</span>
                    <span className="text-indigo-600"> or browse</span>
                    <span> to upload</span>
                  </label>
                </h3>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>

              {selectedFile && (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  className="mt-4 mx-auto max-h-40 block"
                  id="preview"
                />
              )}
            </div>

            {/* Gap using margin top */}
            <div className="mt-6 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        {showDialog && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                onClick={(e) => e.stopPropagation()} // prevent modal click from bubbling
                tabIndex={-1} // prevent auto focus issues
              >
              <div className="flex justify-center">
                <img
                  src="src\assets\201203_Portrait_Nurse.jpg"
                  alt=""
                  className="h-20 w-20"
                />
              </div>
              {result && <p className="mt-4">{result}</p>}

              <button
                onClick={() => setShowDialog(false)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
                Close
              </button>
              <Link
                  to="/Diagnose/mritest"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                MRI TEST 
              </Link>
            </div>
          </div>
        )}

        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </div>
    </div>
    <FooterBlock />
    </>
  );
}
