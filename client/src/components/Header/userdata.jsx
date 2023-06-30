import { useEffect } from "react"
import { useSelector ,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import {FaEdit } from  "react-icons/fa"
import {once} from "../services/MotionRender"
import { Logout ,reset} from "../../redux/authRudux/signUpSlice"


function utils() {

  //=> GETTING USER NAME
  const {user} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onLogout = ()=>{
 
    const logouts =  dispatch(Logout())
    if(logouts && isSuccess){
     navigate("/")
   }
   setTimeout(() => {
    dispatch(reset())
 
 }, 300);
    } 
  

 

  return (
    <>
{  user ? <>
    <div className=""> 
    
    <div style={once } className=" p-1 font-thin md:font-bold lg:font-semibold animate-bounce " >
      <h2 className="italic font-bold drop text-center">User Details</h2>
      <hr className="mx-2 drop" />
      
      <span className="drop p-1 ml-3 flex " >
        {user.FullName}
        <FaEdit className="bg-transparent ml-10 fill-blue-700" />
      </span>
      
      <hr className="mx-2 drop drop-shadow-sm " />
      <h1 className=" font-thin ml-3  p-1 drop flex"  >{user.Email}
        <FaEdit className="bg-transparent ml-10  fill-blue-700 " /></h1>
      <hr className="mx-2 drop" />
      
       <h2 className="drop mt-2 mb-0 outline p-1 rounded" >
       <button type="button" className="btn btn-primary" onClick={onLogout} 
            data-bs-toggle="button" aria-pressed="false" autoComplete="off">SignOut</button> 
        </h2>
    </div>
   </div>
   </>
 : ""}
   
    </>
  )

}
export default utils