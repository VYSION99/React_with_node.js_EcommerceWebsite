import { useSelector} from "react-redux"



//=> MODULES

import Logo from  "./logo"
import NavList from  "./navList"



function Header() {
const {user} = useSelector((state)=> state.auth || state.Admin)

  return (
    <div  className='mb-28'>

<nav className="  navbar mb-2 mt-0 z-100 bg-current navbar-light   flex fixed-top rounded">
 
{/*nav lists */}
{user ? <NavList />: ""}

< Logo />


    { /* navbar list */ }
    
</nav>

    </div>
  )
}

export default Header