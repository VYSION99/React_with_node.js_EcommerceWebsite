import {Link} from "react-router-dom"
import {once} from "../services/MotionRender"

function nav() {
  
  return (
    <>
    <ul className="p-2  bg-yellow-500 bg-opacity-90 
    justify-around  md:mt-1 md:mx-4 rounded-tr-full w-96 md:w-3/4  
    rounded-bl-full  px-2 flex  border-x-slate-100 border-x-4">
   <div className="dropdown open">
    <h2 className="shadow-sm p-1 mx-2 dropdown-toggle "  id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
          FOOD
        </h2>
    <div className="dropdown-menu" aria-labelledby="triggerId">
      <Link className="dropdown-item shadow-sm" to="#">Ac</Link>
      <Link className="dropdown-item shadow-sm " to="#">Disabled action</Link>
    </div>
   </div>
   <div className="dropdown open">
    <h2 className="shadow-sm p-1 mx-2 dropdown-toggle"  id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
          TECHNOLOGY
        </h2>
    <div className="dropdown-menu" aria-labelledby="triggerId">
      <Link className="dropdown-item shadow-sm" to="#">Ac</Link>
      <Link className="dropdown-item shadow-sm " to="#">Disabled action</Link>
    </div>
   </div>
   <div className="dropdown open">
    <h2 className="shadow-sm p-1 mx-2 dropdown-toggle"  id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
          FASHION
        </h2>
    <div className="dropdown-menu " aria-labelledby="triggerId">
      <Link className="dropdown-item shadow-sm" to="#">Ac</Link>
      <Link className="dropdown-item shadow-sm " to="#">Disabled</Link>
    </div>
   </div>
      
    </ul>
    
    </>
  )
}

export default nav