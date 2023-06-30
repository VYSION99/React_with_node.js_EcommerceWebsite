import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {FaEye} from  "react-icons/fa"

import { register, reset } from "../../redux/authRudux/signUpSlice";
import { Form, Field } from "react-final-form";
import {showPass} from "./validation";


import Select from 'react-select'
import Countries from 'i18n-iso-countries'
import enlocale from  'i18n-iso-countries/langs/en.json'
import itlocale from  'i18n-iso-countries/langs/it.json'




const Signup = () => {
   
    //=> COUNTRIES REGISTRATIONS
    Countries.registerLocale(enlocale)
    Countries.registerLocale(itlocale)
    //=> RETURNING AN OBJ OF COUNTRY NOT LIST
    const countryObj = Countries.getNames('en',{select:'official'})
   const countryArr = Object.entries(countryObj).map(([key,value])=>{
    return {
      value: key,
      label: value,
     }
   })  
     const [selected,setSelected] = useState(null)

  const Selecthandler = (selected)=>{
    setSelected(selected.label)
    }
//console.log(countryArr)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError){
      var ErrorMsg =  document.querySelector(".ErrorMsg");
      ErrorMsg.classList.remove("hidden")
      ErrorMsg.innerText = message
      setTimeout(()=>{
      ErrorMsg.classList.add("hidden")
      },8000)
    }
   

    if ( user) {
      navigate("/dashboard");
    }

    setTimeout( ()=>{dispatch(reset());},200)
  }, [user, isError, isLoading, isSuccess, message, dispatch, navigate]);

  const onSubmit = (value) => {
    
    const userData = {
      FirstName: value.FirstName,
      LastName: value.LastName,
      Email: value.Email,
      Password: value.Password,
      City: value.City,
      State: selected,
    };
   
    dispatch(register(userData))
  };
 

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit}) => (
          <form className=" g-3  mt-2 mx-6 shadow p-3  " onSubmit={handleSubmit}>
            <h3 className="ErrorMsg hidden text-red-400 -mt-3 mb-2 shadow-red-200 rounded-md shadow-inner p-2"> </h3>
           <Field
              name="LastName"
              render={({ input, meta }) => (
                
                <div className={meta.active ? "active" : "border-l-4 my-3  border-orange-500"}>
                  <input
                    {...input}
                    placeholder="lastName"
                    required
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control my-2 shadow-md shadow-gray-400"
                    }
                  />
                 
                </div>
              )}
            /> 
            <Field
              name="FirstName"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-r-4 my-3  border-orange-500"}>
                    
                     <input
                {...input}
                    placeholder=" FirstName"
                    required
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control my-2 shadow-md shadow-gray-400"
                    }
                  />
                   
                </div>
              )}
            />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            

           
            <Field
              name="State"
              render={({  meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-lime-500"}>
                  <Select 
                        placeholder='choose your State'
                        options={countryArr}
                        onChange={Selecthandler}
                        className='bg-dark text-left rounded-md shadow-md shadow-gray-500'
                      />
                     </div>
                  )}
               
              
            />
            <Field
              name="City"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-r-4 my-3  border-lime-500"}>
                  <input
                    {...input}
                    placeholder="Enter your City"
                    className={  meta.touched && meta.error                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                        ? " is-invalid  form-control"
                        : "form-control my-2 shadow-md shadow-gray-500"
                    }
                  />
                 
                </div>
              )}
            />
                    
                  
        
            <Field
              name="Email"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-yellow-400"}>
                  <input
                    {...input}
                  required
                    type="email"
                    placeholder="Email"
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control  mt-2 shadow-md shadow-gray-400"
                    }
                  />
                  
                </div>
              )}
            />
            
            <Field
              name="Password"
              render={({ input, meta }) => (<>
                <div className={meta.active ? "active" : "border-r-4 my-3  border-yellow-400"}>
                  <input
                    {...input}
                   required
                    type="password"
                    id="Password"
                    placeholder="Password"
                    className={
                      meta.touched && meta.error
                      ? " is-invalid  form-control my-2"
                      : "form-control my-2 shadow-md shadow-gray-400"
                    }
                  /> </div>
                    
                  {meta.touched && meta.error && (
                    <span className="invalid-feedback -mt-3">{meta.error}</span>
                    
                    )}<small>
              <label htmlFor='show' className="-ml-48 -my-3 -mt-2"> 
    <input type="checkbox" 
    value="" onChange={onchange} onClick={showPass} id='show'/> 
      Show Password</label> 
      </small>
                </>
              )}
              
            />
            
            

            <small className="form-check lg:font-semibold md:font-medium">
              <label htmlFor="invalidCheck" className=""><input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />Agree to terms and conditions</label>

              
            </small>

            <div className="m-2">
            
            <button
            type="submit"
            className=" bg-green-200 form-control"
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
        )}
      ></Form>
      
    </div>
  );
};

export default Signup;
