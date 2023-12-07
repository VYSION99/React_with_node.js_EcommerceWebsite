import { readdir} from "fs";
import {join, extname ,} from "path"



export const ImageReader= ( folderPath)=>{
  let uniqueArray;
 readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }
    const { ProductName, Brand, Category, Price , Opt } = req.body;

    // Filter out non-image files based on their extension (you can adjust this if needed)
    const imageFiles = files.filter((file) => {
      const extension = extname(file).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension);
    });

     uniqueArray = Array.from(new Set(imageFiles));
  })
  return uniqueArray
}




//saveImageToFolder(imageData, fileName, folderPath);





