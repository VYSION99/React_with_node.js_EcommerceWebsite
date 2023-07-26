import Navbar from "./AdminSlider"
import "./adashboard.css"
import Items from "../../services/ItemsRender"




function AdminDasshboard() {
  //console.log(query("Option"),items)

  return (
    <div className="flex">
        <div className=" flex-1 shadow-inner   rounded-md"> 
        <Navbar/>
        </div>
        
      <div className="flex-4 overflow-x-hidden mx-2 shadow-md mt-2 my-2 ">
          <Items/>
      </div>
    </div>
  )
}

export default AdminDasshboard