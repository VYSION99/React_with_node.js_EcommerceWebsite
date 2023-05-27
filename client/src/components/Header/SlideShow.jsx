import React from 'react'

function SlideShow() {
  return (
    <>
    <button className="navbar-toggler p-1  bg-yellow-400" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button> 
    
    <div className="offcanvas rounded mt-24  offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
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