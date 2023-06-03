import { useEffect } from "react"
import { useSelector ,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import {motion} from "../services/MotionRender"
import Spinner from '../services/spinner'
import { Logout ,reset} from "../../redux/authRudux/signUpSlice"

function Home() {

  const {user } = useSelector((state) =>(state.auth))
  
 
const navigate = useNavigate()
const dispatch = useDispatch()

useEffect(()=>{
  if ( !user) {navigate("/");}
   

},[user,navigate, ])
   const onLogout = ()=>{
    dispatch(Logout());
    dispatch(reset())
    navigate("/")
   }
   let loader;
  return (
    <>
    {user ? loader = motion(true):""}
    <div className="container">
        <h1 className="bg-yellow-400">
            you are highly welcome

            <button type="button" className="btn btn-primary" onClick={onLogout} 
            data-bs-toggle="button" aria-pressed="false" autoComplete="off">Logout</button>
        </h1>
        {loader? <Spinner />:""}
    </div>
    
    </>
  )
}

export default Home