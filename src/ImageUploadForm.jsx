// src/ImageUploadForm.js
import React, { useState } from "react";
import axios from "axios";

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8000/upload-image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setResult(response.data.result);
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
      <div>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default ImageUploadForm;
