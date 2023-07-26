


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset } from "../../redux/authRudux/signUpSlice";
import { Form, Field } from "react-final-form";
import { validate } from "./validation";
import Spinner from "../spinner";


 const Test = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isLoading, isSuccess, message, dispatch, navigate]);

  const onSubmit = (value) => {
    alert("hello")
    const userData = {
      Email: value.Email,
      Password: value.Password,
    
    };
   
    dispatch(register(userData))
  };
  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit,submitting}) => (
          <form className=" g-3  mt-2 mx-12  " onSubmit={handleSubmit}>
            <Field
              name="Email"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : ""}>
                    
                     <input
                {...input}
                    placeholder=" Email"
                    type="email"
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control my-2"
                    }
                  />
                  {meta.touched && meta.error && (
                    <span className="invalid-feedback">{meta.error}</span>
                  )}  
                </div>
              )}
            />
          
            <Field
              name="Password"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : ""}>
                  <input
                    {...input}
                    type="password"
                    placeholder="Password"
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control my-2"
                    }
                  />
                  {meta.touched && meta.error && (
                    <span className="invalid-feedback">{meta.error}</span>
                  )}
                </div>
              )}
            />
           
           

            <div className="m-2">
            
                <button
                  className="btn btn-primary bg-blue-600 form-control text-black "
                  type="submit"
                >
                  {submitting ? <spinner /> :"Submit" }
                  
                </button>
            
            </div>
            
          </form>
        )}
      ></Form>
    </div>
  );
};
export default Test;