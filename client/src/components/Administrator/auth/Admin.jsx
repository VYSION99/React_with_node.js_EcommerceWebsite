import {useState , useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {Regex} from '../../UserAuth/validation'
import { Admin ,reset} from '../../../redux/authRudux/adminSlice'

function Logger() {
 

  const [formData, setFormData] = useState({
    Lastname:"",Firstname:"",Email:"",
  })
  
  const navigate = useNavigate()
  const Dispatch = useDispatch()
const {isLoading,isError,admin,message,isSuccess} = useSelector((state)=> state.Admin)

//console.log(message)
const {Lastname,Firstname,Email} = formData


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

if(admin && isSuccess){ navigate("/admin/v1/logger/authorize") }


if(isSuccess){Dispatch(reset())}

},[isLoading,isError,message,admin,isSuccess,navigate ,Dispatch,reset])


const SubmitForm = (e)=>{
  e.preventDefault()
  e.stopPropagation()
  const AdminData= {Lastname,Firstname,Email}
  if(Email.match(Regex))Dispatch(Admin(AdminData))
  
 }



 

  return (
    <div className="  mb-0 shadow-lg rounded-sm">
      <h1 className="fst-italic font-bold shadow-md p-2 text-center mx-6">
        Authorize your Admin credentials </h1>
      <center className="container bg-center justify-center p-3 shadow-lg my-3 ">
        <form className=' p-2' onSubmit={SubmitForm} >
        <small className="errorMsg"></small>

          

          <div className='border-l-4 my-3  border-lime-500'>
          <input placeholder='Enter your Firstname' 
          value={Firstname} onChange={onchange} required 
          className='  m-2 shadow-md  form-control' type="text" name='Firstname'/>
          </div>
          
          
          <div className='border-l-4 my-3  border-l-sky-500'>
          <input placeholder=' Enter Lastname' 
          value={Lastname} onChange={onchange} required    
           className=' m-2  shadow-md  form-control' type="text" name='Lastname'/>
        </div>
          <div className='border-l-4 my-3  border-l-sky-500'>
          <input placeholder=' Provide email' 
          value={Email} onChange={onchange} required    
           className=' m-2  shadow-md  form-control' type="email" name='Email'/>
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