

function Spinner() {
  
  return (
    <div className=" flex justify-center items-center 
    absolute top-0 bottom-0 right-0 left-0  p-5
    w-full h-screen  bg-blend-overlay bg-gray-200 bg-opacity-95">
 <div className="text-center font-serif  
font-bold text-cyan-300  shadow-lg 
  shadow-cyan-400 bg-blend-screen bg-slate-50 rounded-3xl p-20">
  Thanks for choosing OSM Super Store 
  <div>
    <small className="text-yellow-400 text-shadow">
      kindly be patient you will be directed to the Store
    </small><br/>
                {" "}
                <span
                  className="spinner-border  spinner-border-sm ml-2"
               role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </div>
 </div>
        
    </div>
  )
}

export default Spinner