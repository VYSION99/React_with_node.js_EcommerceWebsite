
import React, { useState } from "react";

export let Images;
export const Uploader = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Used to reset the file input

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB (you can adjust this as needed)

    if (file) {
      if (file.size > maxSizeInBytes) {
        alert(
          `File size exceeds the limit. Maximum size allowed: ${
            maxSizeInBytes / (1024 * 1024)
          } MB`
        );
        setFileInputKey(Date.now()); // Clear the file input to allow re-selection of files

        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
     else {
      setPreviewImage(null);
    }

    Images = new FormData();
    Images.append("image", file);
    //countdownTimer(10, ,y)
   
  };
const Changer = ()=>{
  setPreviewImage(null),
  setFileInputKey(Date.now())
}
  
  return (
    <div
      className={
        previewImage
          ? " border-cyan-300  rounded-md m-2 justify-center text-center"
          : " text-center  rounded-md border-cyan-700 border-l-4 "
      }
    >
     
      <label
        htmlFor="uploader"
        className="border-2 rounded-md shadow-md  border-cyan-500 "
      > {previewImage && (
        <div className="flex justify-between">
          <img
            src={previewImage}
            alt="Preview"
            className="h-20 w-20 ml-5 relative top-3 rounded-sm "
          />
          <button className="bg-cyan-500 text-sm h-9 mx-3 mt-3 rounded-md px-2" onClick={Changer}> Romove Image</button>
        </div>
      )}
        {previewImage ? (
          ""
        ) : (
          <p className="top-14 text-lg p-0 relative font-extrabold text-cyan-600 italic">
            Click here or Drag And Drop To Upload Product Image
          </p>
        )}
        <input
          type="file"
          accept="image/*"
          key={fileInputKey}
          onChange={handleImageChange}
          className={
            previewImage
              ? "imgtype px-52 "
              : " py-12 px-52 -mt-6  imgtype"
          }
          required
        /> <div
        className="bg-cyan-400 relative   float-right  px-4 -top-2 mr-2 w-32 shadow-sm rounded-md"
        id="message"
      ></div>
      
      </label>
      
    </div>
  );
};

//export default Uploader;
