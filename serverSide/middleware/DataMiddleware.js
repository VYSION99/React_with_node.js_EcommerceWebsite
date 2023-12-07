import {readdir} from "fs"
import { extname,join } from "path"
import {TechPackage ,finder,FoodPackage,FashPackage} from "../controllers/ProductControllers.js"
import AsyncHandler from "express-async-handler";



const foodFolder = `Gallary/Images/Food`
const fashionFolder = `Gallary/Images/Fashion`
const TechFolder = `Gallary/Images/Technology`

let result = [],
  result1 = [],
  result2 = []; 

//.................///.........FOOD DATA FINAL PROCESSING .....................///..........................//
export const foodData =AsyncHandler(async (res)=>{
  
  readdir(foodFolder , ( err ,files)=>{
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }
    

 // Filter out non-image files based on their extension 
 const imageFiles = files.filter((file) => {
   const extension = extname(file).toLowerCase();
   return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension);
  });
  let uniqueArray = Array.from(new Set(imageFiles));
  
   var FileExt_4 = uniqueArray.filter(
     (item) => item.split(".").pop().length == 4
     );
     var FileExt_3 = uniqueArray.filter(
       (item) => item.split(".").pop().length == 3
   );

   //.........................................searching through to make the image and docs one............................//
   
   const   PSfile =FileExt_4.filter(
     (item) =>
item.slice(item.length - 9, -5) === finder
);

     var   ImageArray = FileExt_3.filter(
    (item) => item.slice(item.length - 8, -4) === finder   
    );
    
    for (const obj of FoodPackage){
      for (const key in obj) {
        if(key ===finder){ 
          if(PSfile.length === 0){
            obj[key].image = join(foodFolder, ImageArray[0]);
          }else{
            obj[key].image = join(foodFolder, PSfile[0]);
            
          }
          result.push(obj[key])
        }
      }
    }
     let pro = {};
     pro.food = result;
    console.log(pro,res)
   res.status(200).json(pro)
  })
})


//.................///.........TECHNOLOGY DATA FINAL PROCESSING .....................///..........................//


export const techData =AsyncHandler(  async (res)=>{
  //console.log(res)
   readdir(TechFolder, (err, files) => {
     if (err) {
       console.error("Error reading folder:", err);
       return;
     }
     
     // Filter out non-image files based on their extension
     const imageFiles = files.filter((file) => {
       const extension = extname(file).toLowerCase();
       return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension);
      });
      let uniqueArray = Array.from(new Set(imageFiles));

     var FileExt_4 = uniqueArray.filter(
       (item) => item.split(".").pop().length == 4
     );
     var FileExt_3 = uniqueArray.filter(
       (item) => item.split(".").pop().length == 3
       );

     //.........................................searching through to make the image and docs one............................//

     const PSfile = FileExt_4.filter(
       (item) => item.slice(item.length - 9, -5) === finder
       );
       
       var ImageArray = FileExt_3.filter(
       (item) => item.slice(item.length - 8, -4) === finder
     );

if(TechPackage != null){ 
 for (const obj of TechPackage) {
       for (const key in obj) {
         if (key === finder) {
           if (PSfile.length === 0) {
             obj[key].image = join(TechFolder, ImageArray[0]);
           } else {
             obj[key].image = join(TechFolder, PSfile[0]);
           }
           result1.push(obj[key]);
         }
       }
     }
} 
 let pro = {};
 pro.tech = result1;
    
    // console.log(result1, res);
    res.status(200).json(pro);
    }); 
})

//.................///.........FASHION DATA FINAL PROCESSING .....................///..........................//

export const fashData =AsyncHandler( async (res)=>{
 // console.log(FashPackage)
   readdir(fashionFolder, (err, files) => {
     if (err) {
       console.error("Error reading folder:", err);
       return;
     }

     // Filter out non-image files based on their extension
     const imageFiles = files.filter((file) => {
       const extension = extname(file).toLowerCase();
       return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension);
      });
     let uniqueArray = Array.from(new Set(imageFiles));

     var FileExt_4 = uniqueArray.filter(
       (item) => item.split(".").pop().length == 4
     );
     var FileExt_3 = uniqueArray.filter(
       (item) => item.split(".").pop().length == 3
     );

     //.........................................searching through to make the image and docs one............................//
     
     const PSfile = FileExt_4.filter(
       (item) => item.slice(item.length - 9, -5) === finder
       );
       
     var ImageArray = FileExt_3.filter(
       (item) => item.slice(item.length - 8, -4) === finder
     );

      for (const obj of FashPackage) {
       for (const key in obj) {
         if (key === finder) {
           if (PSfile.length === 0) {
             obj[key].image = join(fashionFolder, ImageArray[0]);
           } else {
             obj[key].image = join(fashionFolder, PSfile[0]);
           }
           result2.push(obj[key]);
         }
       } 
     }
     
     let pro = {}
     pro.fash=result2
     
     console.log(pro)
     res.status(200).json(pro)
   });
})
 