// product Brand
const FaData ={
21:"Nike", 
20:"Gucci",
19:"Louis Vuitton",
18:"Adidas",
17:"Lululemon",
16: "Zara",
15:"Chanel",
14:"UNIQLO",
13: "H&M",
12: "Cartier", 
11:"Hermès", 
10: "Zalando", 
9:"Tiffany & Co",
8:"Moncler",
7:"Rolex",
6:"Prada",
5:"Patek Philippe",
4:"Burberry",
3:"Chow Tai Fook",
1:"Swarovski",
}
const AccessData ={
1: "Anker",       
2: "Logitech",    
3: "JBL",         
4:"OtterBox",     
5:"Belkin",     
6:"GoPro",      
7:"Razer",     
8:"Bose",        
9:"Samsung",     
10:"Apple",       
11:"Canon",       
12:"Amazon",       
13:"Sennheiser",  
14:"Garmin",      
15:"Nikon",        
}
const   FoData ={
1:"Nestle", 2:"PepsiCo", 3:"Coca-Cola", 4:"Unilever", 5:"Danone", 
6:"Kraft Heinz", 7:"General Mills", 8:"Kellogg's",9: "Mars", 10:"Mondelez", 11:"Other",

}

// product categorys
const TeCategorys = {
cables: "Portable chargers and cables", 
computer: "Computer peripherals", 
electronic: "Electronics accessories",
smart: "Smart trackers", 
tracking: "Fitness trackers and smartwatches", 
audio: "Audio products", 
memory:"Memory cards and flash drives", 
phone:"Phone cases and screen protectors", 
wireless:"Wireless chargers and adapters", 
cameras: "Action cameras and mounts", 
} 
const FoCategorys = {}
const FCategorys={
mini: "Mini dress",
midi: "Midi dress", 
maxi: "Maxi dress", 
shoulder: "Off-the-shoulder dress",
wrap: "Wrap dress",   
shift: "Shift dress",  
Aline: "A-line dress", 
kaften: "Kaftan dress", 
barfot: "Bardot dress",   
surplice: "Surplice dress", 
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
const FoodData = Object.entries(FoData).map( ([key,value]) =>{
   return {
    value:key,
    label:value
}})
const accessoriesData = Object.entries(AccessData).map( ([key,value]) =>{
   return {
    value:key,
    label:value
}})
const FashionData = Object.entries(FaData).map( ([key,value]) =>{
   return {
    value:key,
    label:value
}})
export const productData ={
    FashionCategorys,FashionData,FoodCategorys,FoodData,TechnologyCategorys,accessoriesData
}