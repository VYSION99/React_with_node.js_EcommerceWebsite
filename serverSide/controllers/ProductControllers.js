import {product} from '../models/userModels.js'
import AsyncHandler from "express-async-handler";
const {ProductBrand,ProductItem} = product
console.log(product)    

export const ProductHandler = AsyncHandler ( async  (req,res)=>{
  const {Category,Brand, ProductName, Price, Image,Des } = req.body;
    


 if(!Category || !Brand){
    res.status(401).json({
        msg:"Product without category or brand can not be publised "
    })
    
}else{ 
   const items = await ProductItem.findOne({ProductName});
   //console.log(items)
    if(items){res.status(400).json({msg: "The about Product has been published already"})}
          else{
       const savedBrand = ProductBrand.create({
            Category:Category,
            Brand:Brand
        })
        if(savedBrand){
            ProductItem.create({
                ProductName:ProductName,
                Price:Price,
                ProductImage:Image, 
                Descriptions:Des
            })
            res.status(200).json({msg:"Product published successfully"})
          }
        }
       
  
}


})

