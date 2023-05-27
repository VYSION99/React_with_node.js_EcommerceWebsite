


//=> MODULES

import Logo from  "./logo"
import NavList from  "./navList"



function Header() {
  return (
    <div  className='mb-28'>

<nav className=" pb-2 navbar my-2 z-50  overflow-x-hidden navbar-light bg-current  flex fixed-top rounded">
 
{/*nav lists */}
< Logo />
<NavList />


    { /* navbar list */ }
    
</nav>

    </div>
  )
}

export default Header