import {useState , useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from 'react-router-dom'
import { PasswordReset,reset } from '../../../redux/authRudux/signUpSlice'
function Resetpassword() {
 

  const [formData, setFormData] = useState({
   Email:"",
  })
  
  const navigate = useNavigate()
  const Dispatch = useDispatch()
const {isLoading,isError,message,isSuccess} = useSelector((state)=> state.auth)


const {Email} = formData


const onchange = (e)=>{
    setFormData((state) =>({
      ...state,
        [e.target.name]:e.target.value,
    }))
}


useEffect(()=>{
  const msg= document.querySelector(".errorMsg")
if(isError)msg.innerText = message.msg
if(isSuccess){
  msg.innerText = message.msg

setTimeout(()=>{
  Dispatch(reset())
},7000)}
},[isLoading,isError,message,isSuccess,navigate])


const SubmitForm = (e)=>{
  e.preventDefault()
  e.stopPropagation()
  Dispatch(PasswordReset({Email}))
 }



 

  return (
    <div className=" mx-80 mt-40  mb-0 shadow-lg rounded-sm">
      <h1 className="fst-italic font-bold shadow-md p-2 text-center mx-6">
        Forget Password Reset</h1>
      <center className="container bg-center justify-center p-3 shadow-lg my-3 ">
        <form className=' p-2' onSubmit={SubmitForm} >
        <small className={ isSuccess?"errorMsg text-lime-500":isError?"errorMsg text-red-500":"hidden" }> </small>

          <div className='border-l-4 my-3  border-lime-500'>
          <input placeholder='Enter your Email' 
          value={Email} onChange={onchange} required 
          className='  m-2 shadow-md  form-control' type="email" name='Email'/>
          </div>


        <div className="ml-4 my-3 ">
          <button
            type="submit"
            className="btn bg-green-200 form-control"
            disabled={isLoading}
          >
            {isLoading ? (
              <div>
                {" "}
                <span
                  className="spinner-border spinner-border-sm ml-2"
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
      </center>
    </div>
  )
}

export default Resetpassword
