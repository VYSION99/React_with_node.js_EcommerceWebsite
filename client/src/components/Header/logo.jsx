import {FaSearch ,FaUser} from "react-icons/fa"
import SlideShow from "./SlideShow"
import DataUser from "./userdata"
import {Slider } from "../UserAuth/validation"
import { useSelector} from "react-redux"


function logo() {
  const {user} = useSelector((state)=> state.auth)
  const {admin} = useSelector((state)=> state.Admin)
  return (
    <>

 <div className="flex justify-center justify-items-center m-3 mb-1 ">
     
     <img src="/image/Storelogo2.jpg" alt="home logo" className=" ml-1 w-11 object-cover  h-14 -mt-2  redius" />
     <span className="textLogo ml-1 mb-0 mt-3 italic space-x-1"> CSuper.com</span>
    {/*search form */}
    <form className="">
       
          <input 
          className=" form-control   ml-4
           w-24 p-1 text-center text-clip   md:w-auto lg:w-auto"
           type="search" placeholder="search"
            aria-label="Search" />
       
         
        </form>
     </div>
        
    
    
    </>
  )
}

export default logo