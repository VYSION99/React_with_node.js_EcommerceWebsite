import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {motion} from "../../services/MotionRender"
import Spinner from '../../services/spinner'
import ProfileList, {ProfileContent} from "./utils/navList"


function Home() {

  const {user, isLoading,isSuccess } = useSelector((state) =>(state.auth))
  const navigate = useNavigate()
 
if(user === null && isSuccess){
navigate("/")
}
  
   let loader;
  return (
    <>
    {user ? loader = motion(true): ""}
    <div  >
        <div className=" flag object-cover w-full">
          
          <div className="content bg-dark  justify-items-center opacity-70 ">
            <ProfileList  />
          </div>
        </div>
           <ProfileContent />

            
          
        
        {loader? <Spinner />:""}
    </div>
    
    </>
  )
}

export default Home