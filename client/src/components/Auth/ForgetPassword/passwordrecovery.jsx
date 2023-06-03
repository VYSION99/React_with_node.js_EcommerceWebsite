import {useState , useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useLocation, useNavigate ,Link} from 'react-router-dom'
import { PasswordRecovery, reset} from '../../../redux/authRudux/signUpSlice' ;
import {showPass}  from "../validation";




function RecoveryPassword() {

  const [formData, setFormData] = useState({
  Cpassword:"",Password:"" , checkes:"",
  })
  const UseQuery = new URLSearchParams(useLocation().search)
  
  const navigate = useNavigate()
  const Dispatch = useDispatch()
const {isLoading,isError,message,isSuccess} = useSelector((state)=> state.auth)


const {Password, Cpassword,checkes} = formData


const onchange = (e)=>{
    setFormData((state) =>({
      ...state,
        [e.target.name]:e.target.value,
    }))
}


useEffect(()=>{
   const ErrorMsg = document.querySelector(".errorMsg");
if(isError){
  ErrorMsg.innerText = message
}

if(isSuccess ){ 
setTimeout(()=>{ ErrorMsg.innerText = message},0)
setTimeout(()=>{navigate("/")},4000)
setTimeout(()=>{Dispatch(reset())},4100)

 }

 
},[isLoading,isError,message,isSuccess,navigate])


const SubmitForm = (e)=>{
  e.preventDefault()
  e.stopPropagation()
  const RecoveryData ={
    Password,Cpassword,
    token:UseQuery.get("token"),
    _id: UseQuery.get("id")
  }
  Dispatch(PasswordRecovery(RecoveryData))
 }

 const cssSr ={
  backgroundColor:"white",
  position:"relative",
 

}

  return (
    <div className=" lg:mx-96 lg:mt-40 md:mt-5 md:mx-60  mb-0 lg:shadow-lg md:shadow-md shadow-sm rounded-sm p-3 pb-0">
      <h1 className="fst-italic font-bold shadow-md p-2 text-center mx-6">
       Kindly Reset Your Password</h1>
      <div className="container bg-center justify-center p-3 lg:shadow-lg md:shadow-md shadow my-3 ">
        <form className=' md:p-6 p-3 ' onSubmit={SubmitForm} >
        <small className="errorMsg text-center text-red-500">   </small>

          <div className='border-l-4 my-3  border-lime-500'>
          <input placeholder='Enter your  new Password' 
          value={Password} onChange={onchange} required 
          className='  m-2 shadow-md  form-control' type="password" id="Password" name='Password'/>
          
          </div>
          
          <div className='border-l-4 -my-1 border-lime-500'>
          <input placeholder='comfirm your new Password' 
          value={Cpassword} onChange={onchange} required 
          className='  m-2 shadow-md  form-control' type="password" id="Password1" name='Cpassword'/>
          </div>
    <label htmlFor='show' className="ml-3 my-3"> 
    <input type="checkbox" 
    value={checkes} onChange={onchange} onClick={showPass} id='show' name='checked'/> 
      Show Password</label>
      
       <div className="ml-4 -my-2 ">
          <button
            type="submit"
            className=" bg-green-200 form-control"
            disabled={isLoading}
          >
            {isLoading ? (
              <div>
                {" "}
                <span
                  className="spinner-border  spinner-border-sm ml-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </div>
            ) : (
              " submit"
            )}
          </button>
        </div>
        </form>
        </div> 
      
    </div>
  )
}

export default RecoveryPassword