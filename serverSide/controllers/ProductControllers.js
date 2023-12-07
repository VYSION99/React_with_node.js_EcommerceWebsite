import { product } from "../models/userModels.js";
import {  imagesaver} from "../Gallary/GalleryController.js";

import AsyncHandler from "express-async-handler";

import { extname } from "path";
import formidable from "formidable";
import { foodData,techData,fashData } from "../middleware/DataMiddleware.js";

const { ProductItem } = product;

let Querys = [],Querys1 = [],Querys2 = [];
let  options ;
let UniqueNam; 
export let FoodPackage,TechPackage,FashPackage ,finder


export const ProductHandler = AsyncHandler(async (req, res) => { 
  const {Opt,  Category, Brand, ProductName, Price, Des } = req.body;
 options = req.body.Opt
 
 const index =
 ProductName.charAt(ProductName.length - 2).toUpperCase() +
 Math.floor(Date.now() % 1000);  
 const Query = {
     Name: ProductName,
     Price:Price,
     Des:Des}
    
//................................ processing Product information..............................................................//
  DataQuerys(Query,index,Opt)
   
//.................................. working on product  form .................................................//
    if(index.length === 4 ){
      if (!Category || !Price) {
        res.status(401).json({
          msg: "Product without category or Price can not be publised ",
        });
      } else {
        const items = await ProductItem.findOne({ ProductName });
        //console.log(items)
        if (items) {
          res
            .status(400)
            .json({ msg: "The about( Product has been published already" });
        } else {
          ProductItem.create({

            Category: Category,
            Brand: Brand,
            ProductName: ProductName,
            Price: Price,
            Descriptions: Des,

          });
          //................ saving product images into a specific folder  ............................................//

          const UniqueName = async (as) => {
            const extenstion = extname(as).slice(1); // the extension without the dot
            var FileName = `${ProductName}_${index}.${extenstion}`;
            return FileName;
          };
          UniqueNam = UniqueName;
          //......................... sending Response to the Client .......................................................//
        }
      }
    }else{ 
      res.status(500).json({msg:"Index error , Re_submit your Product"})
    }
      setTimeout(()=>{
      if(Opt === "Food"){foodData(res)}
     if(Opt === "Fashion"){res.status().json("successfully published")}
      if(Opt ==="Technology"){techData(res)}
     },4000) 
  });
  //.................................................. formidable image Processing.....................................//

 
export const ImagesHandler = AsyncHandler( async (req, res) => { 
  const form = formidable({ multiples: true });
//console.log(req.body)
  form.parse(req, async (err, fields, files) => {
    if (err) { 
      console.log("error parsing form data");
    } 
 
    const imageFile = files.image;
   
//console.log(req)
    const Name = imageFile[0].originalFilename;
    const filepath = imageFile[0].filepath;

    if (!imageFile) {
      console.error("no image provided");

    }
    setTimeout(()=>{  
       ( async ()=>{
     
  try {
       //console.log(UniqueNam(Name));
       const UName = await UniqueNam(Name);

        await imagesaver(UName, `./Gallary/Image/${options}`, filepath);
  } catch (error) {
    console.log(error)  
  }  

  })()
    },500);
  });  
});


//...........................................Product Infromation Query Function........................//

 const DataQuerys = (query, index,opt) => {
  

   const foodquerys =  (a,b)=>{
     const DataQuery = {};
     DataQuery[a] = b;
     Querys.push(DataQuery);
     return Querys;
   }
   const techquerys = (c,d)=>{
     const DataQuery = {};
     DataQuery[c] = d;
     Querys1.push(DataQuery);
     return Querys1;
   }
   const fashquerys = (e,f)=>{ 
    const DataQuery = {};
   DataQuery[e] = f;  
   Querys2.push(DataQuery);
   return Querys2;}

   if(opt == "Food"){ FoodPackage =  foodquerys(index,query)}
   if(opt == "Fashion") {FashPackage =  fashquerys(index,query)}
   if(opt == "Technology") {TechPackage =  techquerys(index,query)}
   finder= index

 }; 

 //.................................................///////////..............................................//