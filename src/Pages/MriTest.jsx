import React, { useState } from "react";
import axios from "axios";
import Chronology from "../Components/Chronology";
import { Link } from "react-router-dom";

export default function MriTest() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
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
        "https://nikhil.sbs/process_image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setShowDialog(true);

      setResult(response.data.result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
      </div>
      <h1 className="text-blue-950 text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold flex justify-center">
        MRI Test
      </h1>
      <p className="text-center text-xl text-gray-600 mt-4">
        Upload a brain MRI image for analysis or choose other image processing
        tasks:
      </p>

      <Chronology />

      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Autism Detection</h1>

        <div
          className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6"
          id="dropzone">
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
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>

          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              className="mt-4 mx-auto max-h-40 block"
              id="preview"
            />
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleSubmit();
            // setShowDialog(true);
          }}>
          Submit
        </button>

        {showDialog && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
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
              <a
                href="/consultancy"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Check Doctors
              </a>
            </div>
          </div>
        )}

        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </div>
    </div>
  );
}
