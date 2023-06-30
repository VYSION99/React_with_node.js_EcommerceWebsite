import {useState , useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from 'react-router-dom'
import { AdminLog, reset} from '../../../redux/authRudux/adminSlice' 
function Logger() {
 

  const [formData, setFormData] = useState({
   role:"",AdminId:"",
  })
  
  const navigate = useNavigate()
  const Dispatch = useDispatch()
const {isLoading,isError,admin,message,isSuccess} = useSelector((state)=> state.AdminLogs)


const {AdminId,role} = formData


const onchange = (e)=>{
    setFormData((state) =>({
      ...state,
        [e.target.name]:e.target.value,
    }))
}


useEffect(()=>{
if(isError){
  document.querySelector(".errorMsg").innerText = message.msg
}

if(isSuccess && admin){ navigate("/admin/v1/home") }

if(isSuccess){ Dispatch(AdminLog(reset()))}
},[isLoading,isError,message,admin,isSuccess,navigate])


const SubmitForm = (e)=>{
  e.preventDefault()
  e.stopPropagation()
  Dispatch(AdminLog({AdminId,role}))
 }



 

  return (
    <div className=" mx-80 mt-40  mb-0 shadow-lg rounded-sm">
      <h1 className="fst-italic font-bold shadow-md p-2 text-center mx-6">
        Authorize your AdminID </h1>
      <center className="container bg-center justify-center p-3 shadow-lg my-3 ">
        <form className=' p-2' onSubmit={SubmitForm} >
        <small className="errorMsg">  check your email account to get your<b>AdminID</b> </small>

          

          <div className='border-l-4 my-3  border-lime-500'>
          <input placeholder='Enter your AdminID' 
          value={AdminId} onChange={onchange} required 
          className='  m-2 shadow-md  form-control' type="password" name='AdminId'/>
          </div>
          
          
          <div className='border-l-4 my-3  border-l-sky-500'>
          <input placeholder=' Provide Role' 
          value={role} onChange={onchange} required    
           className=' m-2  shadow-md  form-control' type="text" name='role'/>
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

export default Logger