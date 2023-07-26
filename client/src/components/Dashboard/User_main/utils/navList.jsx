import {Link} from "react-router-dom"
import {once} from "../../../services/MotionRender"
import {BiCarousel, FaBars , BiCaretLeft, BiCaretRight} from "react-icons/all"
import ImageDisplay from "../../../services/imageDisplayer"

function nav() {
  
  return (
    <>
    <ul className="
    flex justify-center overlay2 mt-5">
   <li className="text-teal-200 mx-5 font-bold mt-9 underline hover:text-lime-50 "> Food</li>    
   <li className="text-teal-200 mx-5 font-bold mt-9 underline hover:text-lime-50 "> Cloths</li>    
   <li className="text-teal-200 mx-5 font-bold mt-9 underline hover:text-lime-50 ">Technology</li>    
    </ul>
    
    </>
  )
}

 export const ProfileContent = ()=>{
  return (
    <>
    <div className="container bg-transparent   overlay1  ">
          <div className=" container bg-transparent -mt-10">
        <div className="flex shadow-md my-2 bg-white text-center rounded-md ">
          <div className="flex-4 p-2 shadow mx-1 ">
            <span className=" font-bold mx-1 text-slate-400 m-2">Request For Discount</span> </div>
          <div className="flex-4 p-2 mx-1 shadow">
            <span className="font-bold text-slate-400 m-2"> Logistics Services</span> </div>
          <div className="flex-4 p-2 mx-1 shadow">
            <span className=" font-bold text-slate-400 m-2">Buyers Benefit
              </span>   </div>
        </div>
            <div className=" flex shadow-lg p-2 rounded-md my-3">
              <div className="flex-2 m-2"> 
            <h1 className="text-slate-500 font-bold mb-3"> OUR PRODUCTS </h1>

            <ul className="rounded-sm ">
              
              <li className="flex  justify-between shadow-sm"> 
               <img src="/product_image/profile.webp" className="img-fluid rounded-full h-10 m-1 w-9" alt="image desc" /><span className="mt-3   hover:text-orange-500 -ml-9">Consumer Electronics</span>  <BiCaretRight className=" mt-2"/></li>
              <li className="flex  justify-between my-1 shadow-sm"> 
               <img src="/product_image/elecronics.jpg" className="img-fluid rounded-full h-10 m-1 w-9" alt="image desc" /><span className="mt-3  hover:text-orange-500 -ml-9">Apparel & Accessories</span>  <BiCaretRight className=" mt-2"/></li>
              <li className="flex  justify-between my-1 shadow-sm"> 
               <img src="/product_image/elecronics.jpg" className="img-fluid rounded-full h-10 m-1 w-9" alt="image desc" /><span className="mt-3  hover:text-orange-500 -ml-9">Sport & EnterTainment</span> <BiCaretRight className=" mt-2"/></li>
              <li className="flex  justify-between my-1 shadow-sm"> 
               <img src="/product_image/elecronics.jpg" className="img-fluid rounded-full h-10 m-1 w-9" alt="image desc" /><span className="mt-3 hover:text-orange-500  ml-1">Vehiecle Parts & Accessories</span>  <BiCaretRight className=" mt-2"/></li>
              <li className="flex  justify-between my-1 shadow-sm"> 
               <img src="/product_image/elecronics.jpg" className="img-fluid rounded-full h-10 m-1 w-9" alt="image desc" /><span className="mt-3  hover:text-orange-500 -ml-12">Industrial Machinery</span>  <BiCaretRight className=" mt-2"/></li>
              <li className="flex  justify-between my-1 shadow-sm"> 
               <img src="/product_image/elecronics.jpg" className="img-fluid rounded-full h-10 m-1 w-9" alt="image desc" /><span className="mt-3   hover:text-orange-500 -ml-24">Home Garden</span>  <BiCaretRight className=" mt-2"/></li>
              <li className="flex  justify-between my-1 shadow-sm"> 
               <img src="/product_image/elecronics.jpg" className="img-fluid rounded-full h-10 m-1 w-9" alt="image desc" /><span className="mt-3    hover:text-orange-500 -ml-36">Beauty</span>  <BiCaretRight className=" mt-2"/></li>
             
             
            </ul>
            
            </div>
      <div className="flex-4 bg-slate-600">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="holder.js/900x500/auto/#777:#555/text:First slide" className="w-100 d-block" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img src="holder.js/900x500/auto/#666:#444/text:Second slide" className="w-100 d-block" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="holder.js/900x500/auto/#666:#444/text:Third slide" className="w-100 d-block" alt="Third slide"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
      </div>

      </div>
      <div className="flex-2 bg-green-700">
        <ImageDisplay/>
      </div>
    </div></div>
      
    </div>

    </>
  )
}

export default nav