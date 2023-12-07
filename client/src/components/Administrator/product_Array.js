//................................................... product sub cat  ...........................................................//
const Apparel ={
jewelry:"Jewelry & Accessories", 
dresses:"Men & Women Wear",
kiks:"Shoes & Shandals"
}
const Garden ={
furniture:"Furniture ", 
pet:"Pet Supplies",
cloths:"Fabric & Textile Materials",
flowers:"Flowers"
}
const Beauty ={
cos:"Comestics", 
}
const Sport ={
cos:"Lugage , Bags & Cases", 
toys:"Kids & Toys", 
shoe:"Shoes & Accessories", 
}
///////////////////.................. Technology sub cat.................................////////////////////////////////////////
const Industrial ={
1: "Constructions Machinerys",       
2: "Building Machineeys",           
}
const consumer ={
1: "Home Appliances",       
          
}
const Travels ={
1: "verhicle spare Parts ",       
2: " 1 , 2 & 3 Cycles",           
}
//////////////. .................. food sub cat ........................... .////////////////////////////
const farm ={
1: "Farm Tools",       
2: "Crops Chemicals",           
}
const FoodPackeages ={
1: "Wrapped Foods",       
2: "Canned Foods",           
3: "Cooked & Roasted Foods",           
}

const brandArr = [FoodPackeages,farm,Travels,consumer,Industrial,Sport,Beauty,Apparel,Garden]

// product main categorys
const TeCategorys = {
cables: "Industrial Machinery", 
home: "Consumer Electronics", 
vehicles: "Travels & Accessories",
smart: "Computers & Accessories", 
sounds: "Sonuds Stms & Accessories", 

} 
const FoCategorys = {
  veg: "Vegetables",
  fruite: "friuts",
  drinks: "Drinks & Beverages",
  agro: "Agriculture Tools",
  med: "Medicines (Animals)",
  food: "Food packages",
 
};
const FCategorys={
mini: "Sport & Entertainment",
midi: "Beauty", 
maxi: "Home & Gardens", 
shoulder: "Apparel & Accessories",

} 

const FashionCategorys = Object.entries(FCategorys).map( ([key,value]) =>{
   return {
    value:key,
    label:value
}})

const TechnologyCategorys = Object.entries(TeCategorys).map( ([key,value]) =>{
   return {
    value:key,
    label:value
}})
const FoodCategorys = Object.entries(FoCategorys).map( ([key,value]) =>{
   return {
    value:key,
    label:value
}})


////////////// sub cat maping ./////////////////////////
 let results=[];
for (let i = 0; i < brandArr.length; i++) {
    
  const data = Object.entries(brandArr[i]).map( ([key,value]) =>{
   return {
    value:key,
    label:value
}})
results.push(data)
}
export const productData ={
   results,FashionCategorys,FoodCategorys,TechnologyCategorys
}