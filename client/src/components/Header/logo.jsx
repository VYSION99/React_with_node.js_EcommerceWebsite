import {FaSearch} from "react-icons/fa"
import SlideShow from "./SlideShow"


function logo() {
  return (
    <>

 <div className=" container ">
     <img src="/codecamps.svg" alt="home logo" className=" w-10 rounded-full p-0 rounded-r-full" />
    {/*search form */}
    <form className="">
        <i>
        <FaSearch className="fill-yellow-500  absolute top-4 ml-2  h-5 w-5 m-1 "   />
          <input 
          className=" form-control rounded-tr-none 
           w-24 p-1 text-center text-clip   md:w-auto lg:w-auto"
           type="search" placeholder="search"
            aria-label="Search" />
          </i>
         
        </form>
        <div className=" flex h-10 border-lime-300 border-r-l">
    
    {/*nav button */}
             <SlideShow />
        </div>
     
    </div>
    </>
  )
}

export default logo