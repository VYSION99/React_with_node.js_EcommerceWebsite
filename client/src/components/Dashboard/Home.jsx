import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {motion} from "../services/MotionRender"
import Spinner from '../services/spinner'


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
    <div className="container">
        <h1 className="bg-yellow-400">
            you are highly welcome

            
          
        </h1>
        {loader? <Spinner />:""}
    </div>
    
    </>
  )
}

export default Home