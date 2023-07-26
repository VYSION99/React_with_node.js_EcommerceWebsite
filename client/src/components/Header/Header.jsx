import { useSelector} from "react-redux"




//=> MODULES

import Logo from  "./logo"
import NavUtils from "./NavUtils"



function Header() {
const {user} = useSelector((state)=> state.auth)
const admin = localStorage.getItem("admin")

  return (
    <div className="Headercontainer mb-20 mt-0 "> 
        
      <div className=" fixed right-0 left-0 top-0 z-100">
<nav  className="shadow-sm flex justify-between bg-slate-100 ">
 
{/*nav lists */}
<Logo />


    <NavUtils/>
</nav>
      </div>

    </div>
  )
}

export default Header