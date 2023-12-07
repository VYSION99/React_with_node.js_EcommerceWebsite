export const productLib = {
     Querys:[] ,Querys1:[],
     Querys2: [],
     options:"",
UniqueNam:()=>{}
}

export let Ytect =[] , Yfood= [], Yfash = [];
 const Porductseter = (products) => {
  if (products.length !== 0) {
    if (products[0]?.hasOwnProperty("Food")) {
      Yfood.push(products[0])
    }
    if (products[0]?.hasOwnProperty("Fashion")) {
      Yfash(products[0]) ;
    }
    if (products[0]?.hasOwnProperty("Technology")) {
      Ytect.push(products[0]);
    }
  }
  console.log(Ytect)
};


export default Porductseter