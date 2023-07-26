import {FaBell,FaCog ,FaUser} from "react-icons/fa"

function NavUtils() {
  return (
    <div className="flex p-3 ">

      
        <div className=""> 
         <FaBell className="mx-2 mt-0 cursor-pointer"/>
            <div className=" align-super">
               <div className="bg-danger badge rounded-full relative -top-3 left-3">2</div>
            </div>
        </div>
         <FaCog className="mx-2 mt-0 cursor-pointer"/>
        <div className=" rounded-full  w-10 h-10 justify-items-center justify-center  bg-slate-500">
        <FaUser className="w-7 h-7 mx-1 my-1 cursor-pointer "/>

        </div>
    </div>
  )
}

export default NavUtils
