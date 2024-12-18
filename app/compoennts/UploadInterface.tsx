"use client";
import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Import spinner

const OCRUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<{ text: string; audio_url: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>("en"); // Default to English
  const [isLoading, setIsLoading] = useState<boolean>(false); // State to manage loading
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State for image preview
  const [isVideo, setIsVideo] = useState<boolean>(false); // State to distinguish between image and video

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const fileType = selectedFile.type.split("/")[0];
      if (fileType === "image") {
        setIsVideo(false);
        // Generate the preview of the selected image
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else if (fileType === "video") {
        setIsVideo(true);
        setImagePreview(null); // No preview for videos
      } else {
        setError("Unsupported file type. Please upload an image or video.");
      }
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("lang", language); // Send the selected language

    try {
      setError(null); // Clear any previous errors
      setIsLoading(true); // Set loading state
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Server Response:", res.data);
      setResponse(res.data);
    } catch (err: any) {
      console.error("Error uploading file:", err);
      setError("Failed to upload file. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleReset = () => {
    setFile(null);
    setResponse(null);
    setError(null);
    setLanguage("en");
    setImagePreview(null); // Reset image preview
    setIsVideo(false); // Reset video state
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload File for OCR</h1>
      <div className="flex flex-col gap-4">
        {/* If not uploading, show the file input */}
        {!isLoading && !response && (
          <>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 rounded"
            />

            {/* Show the image preview if an image is selected */}
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
            )}

            {/* Show file name for videos */}
            {isVideo && file && (
              <div className="mt-4 text-gray-700">Selected Video: {file.name}</div>
            )}

            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 bg-black p-2 rounded"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="ur">Urdu</option>
              <option value="pa">Punjabi</option>
              <option value="skr">Saraiki</option>
            </select>

            <button
              onClick={handleUpload}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Upload
            </button>
          </>
        )}

        {/* If uploading, show spinner */}
        {isLoading && (
          <div className="flex justify-center">
            <ClipLoader size={50} color="white" />
          </div>
        )}

        {/* If there's an error, show error message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* If response is received, show extracted text and audio */}
        {response && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Extracted Text:</h2>
            <p className="border border-gray-300 p-2 rounded mb-4">{response.text}</p>
            <h3 className="text-lg font-semibold mb-2">Generated Audio:</h3>
            <audio controls>
              <source src={`http://localhost:5000${response.audio_url}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <button
              onClick={handleReset}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4"
            >
              New Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRUploader;