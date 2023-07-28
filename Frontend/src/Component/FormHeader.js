import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {  addHeaderImg, addHeaderName } from "../Store/Slice/formSlice";
import { useCloudinaryUpload } from "../Helper/useCloudinaryUpload";

const FormHeader = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [headerName, setHeadername] = useState("Edit HeaderName here");
  const fileInputRef = useRef(null);
  const dispatch=useDispatch()
  const handleChooseImage = () => {
    fileInputRef.current.click();
    console.log("fileinput trigger ");
  };

  const handleImageChange = async(e) => {
    console.log("file uploaded ");
    const file = e.target.files[0];
    try {
      const cdnUrl = await useCloudinaryUpload(file);
      dispatch(addHeaderImg(cdnUrl))
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl("");
  };

  return (
    <>
      <div className="p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            <input
              type="text"
              className="border-none outline-none"
              onChange={(e) => {
                setHeadername(e.target.value);
                dispatch(addHeaderName(e.target.value))
              }}
              placeholder="Header Name"
              value={headerName}
            />
          </h1>
          {!imageUrl ? (
            <>
              <label
                htmlFor="file"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer text-center"
                onClick={() => handleChooseImage()}
              >
                <i className="fa-solid fa-image mr-2"></i> Choose an Image
              </label>
              <input
                ref={fileInputRef}
                className="opacity-0 absolute top-0 left-0 cursor-pointer"
                type="file"
                id="file"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <div className="relative">
              <img src={imageUrl} alt="headerImage" className="w-full h-32" />
              <div
                className="absolute top-2 right-2 bg-red-500 font-bold py-0 px-1 rounded-sm text-white hover:bg-red-600 cursor-pointer"
                onClick={handleRemoveImage}
              >
                Image <i className="fa-solid fa-times font-bold"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormHeader;
