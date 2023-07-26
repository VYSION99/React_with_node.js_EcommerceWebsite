import {FaBars} from "react-icons/fa"

function SlideShow() {
  return (
    <>
    <button className="navbar-toggler p-1  ml-2 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar">
      <FaBars/>
    </button> 
    
    <div className="offcanvas rounded mt-24  border-r-shadow offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header justify-content-center">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
      </div>
      <div className="offcanvas-body rounded-md">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
       
      </div>
    </div>
    </>
  )
}

export default SlideShow