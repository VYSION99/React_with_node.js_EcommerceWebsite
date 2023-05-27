

function nav() {
  return (
    <>
    <ul className="font-light bg-yellow-500  justify-evenly  mt-2 rounded-tr-full w-96 md:w-3/4  rounded-bl-full  p-2 flex  border-x-slate-100 border-x-4">
   <li className="nav-item dropdown mx-4" >
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Food</a>
            <div className="dropdown-menu animate-bounce text-center w-4"  aria-labelledby="dropdownId">
              <a className=" left dropdown-item" href="#">Action 1</a>
              <a className="dropdown-item" href="#">Action 2</a>
            </div>
          </li>
         
          <li className="nav-item dropdown mx-4 ">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Fashion</a>
            <div className="dropdown-menu text-center w-4" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">Action 1</a>
              <a className="dropdown-item" href="#">Action 2</a>
            </div>
          </li>
          <li className="nav-item dropdown mx-4">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Tech</a>
            <div className="dropdown-menu mr-20 w-4 text-center mx-3" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">Action 1</a>
              <a className="dropdown-item" href="#">Action 2</a>
            </div>
          </li>
      
    </ul>
    
    </>
  )
}

export default nav