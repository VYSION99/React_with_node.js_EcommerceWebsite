import {FaSearch ,FaUser} from "react-icons/fa"
import SlideShow from "./SlideShow"
import DataUser from "./userdata"
import {Slider } from "../Auth/validation"
import { useSelector} from "react-redux"


function logo() {
  const {user} = useSelector((state)=> state.auth || Admin)
  return (
    <>

 <div className=" container ">
     <div className="flex m-1 mb-0 ">
     <img src="/codecamps.svg" alt="home logo" className=" w-10 mr-5 fill-current rounded-full bg-opacity-10" />
    {/*search form */}
    <form className="mt-1">
        <i>
        <FaSearch className="fill-current  absolute top-15 ml-56 -rotate-12 opacity-40 
        h-2 w-2 lg:h-4 lg:w-4 md:h-3 md:w-3 mt-2 bg-blend-hue "   />
          <input 
          className=" form-control rounded-tr-none 
           w-24 p-1 text-center text-clip   md:w-auto lg:w-auto"
           type="search" placeholder="search"
            aria-label="Search" />
        </i>
         
        </form>
     </div>
        <div className=" flex h-10 justify-between">
              {/*nav button */}
              {user ? <h2  onClick={Slider} className="shadow-sm flex rounded-b-full rounded-l-full p-2 bg-yellow-500   "  >
          <FaUser className="w-5 h-7 "/>
        </h2> : ""}
             
             
             {/* */}
             <SlideShow />
        </div>
    
    </div>
    <div className=" hidden more top-24  absolute glading bg-opacity-70 
    rounded-md right-3 p1 md:right-3 lg:right-1 outline-double bg-slate-200 ">
     <DataUser className="rounded-md "/>
     </div>
    </>
  )
}

export default logo