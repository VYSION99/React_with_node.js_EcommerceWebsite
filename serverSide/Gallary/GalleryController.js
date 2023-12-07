import fs from "fs";
import { extname, join } from "path";
import sharp from "sharp";
import Porductseter from "../Services/lib.js";
/*
let Dbuseher = {},pusher= [];
export let filteredArray, ImageArray ,image;
// Function to import images from a folder
export const importImages = async (folderPath,index,res,req) => {
   fs.readdir(folderPath, (err, files) => {
     if (err) {
       console.error("Error reading folder:", err);
       return;
     }
     const { ProductName, Brand, Category, Price, Opt } = req.body;

     // Filter out non-image files based on their extension (you can adjust this if needed)
     const imageFiles = files.filter((file) => {
       const extension = extname(file).toLowerCase();
       return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension);
     });

    const   uniqueArray = Array.from(new Set(imageFiles));
   
 //var uniqueArray = ImageReader(folderPath)
    var webpfileJpeg = uniqueArray.filter(
      (item) => item.split(".").pop().length == 4
    );
    if (webpfileJpeg)
      filteredArray = webpfileJpeg.filter(
        (item) => item.slice(item.length - 9, -5) === index
      );

    if (uniqueArray)
      ImageArray = uniqueArray.filter(
        (item) => item.slice(item.length - 8, -4) === index
      );

    if (ImageArray.length === 0 ){ image = join(folderPath, filteredArray[0]);}else{image =join(folderPath,  ImageArray[0]);}
   
    Dbuseher[Opt]={
      ProductName,
      Brand,
      Category,
      Price,
      image}

pusher.push(Dbuseher)

Porductseter(pusher)

    //console.log(image,filteredArray,uniqueArray,ImageArray)
    res.status(200).json({
   
      
    });
    // Process each images
  });
}; 





*/

export const imagesaver = async (
  UniqueName,
folderPath,
  filepath
) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

 
  const folder = join(folderPath, UniqueName)
  fs.rename(filepath,folder , (error) => {
    if (error) {
      console.error("Error saving image:", error);
    } 
    // You can perform image processing here if required using the `sharp` library
  // For example, resizing the image to a specific width and height:
  sharp(folder)
    .resize(800, 600)
    .toFile(join(folderPath, UniqueName), (err) => {
      if (err) {
        console.error("Error resizing image:", err);
      }
    });
  
    console.log("Image file saved:");
  });
};

