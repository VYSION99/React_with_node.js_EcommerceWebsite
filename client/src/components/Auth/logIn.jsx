import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import {FaEye} from "react-icons/fa"


import { Login, reset} from "../../redux/authRudux/signUpSlice";

import { PSWD, Regex, showPass} from "./validation";

const log = () => {
  //=> setting state obj...
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
    checked:""
  });

  //=>state Data
  const { Email, Password,checked } = formData;

  const CheckEmail = Email.match(Regex);
  const CheckPassword = Password.match(PSWD);
  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth);

  useEffect(() => {
    if (isError) {
      document.querySelector(".error").innerHTML = message;
    }

    if (user && isSuccess ) {
    navigate("/dashboard")
    }
   setTimeout(()=>{
      dispatch(reset());
    },2000)
  }, [user, isError, isLoading, isSuccess, message, dispatch, navigate]);

  const SubmitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (CheckPassword && CheckEmail) {
      dispatch(Login({ Email, Password }));
    }
  };


  return (
    <div>
      <form className=" mx-12  gap-2 shadow p-3 " onSubmit={SubmitForm}>
        <small className="text-red-600 font-extralight error"></small>
        <div className=" shadow-sm my-3 mb-2">
          <input
            className={
              !Email
                ? "form-control  "
                : CheckEmail
                ? "form-control  is-valid"
                : "form-control   is-invalid "
            }
            type="email"
            placeholder="Email"
            id="Email"
            name="Email"
            value={Email}
            onChange={onChange}
            required
          />

        </div>

        <div className="shadow-sm my-3 mb-2">
          <input
            className={
              !Password
                ? "form-control  "
                : CheckPassword
                ? "form-control  is-valid"
                : "form-control is-invalid "
            }
            type="Password"
            placeholder="Password"
            id="Password1"
            required
            name="Password"
            value={Password}
            onChange={onChange}
          />

          <span className="font-extralight mb-2 invalid-feedback">
            Use @least 8-15 characters,digit and symbols (eg.@,$){" "}
          </span>
          <span className="font-extralight valid-feedback">
            Strong Password
          </span>
        </div>
        <label htmlFor='show' className="ml-3 my-3"> 
    <input type="checkbox" 
    value={checked} onChange={onchange} onClick={showPass} id='show' name=''/> 
      Show Password</label>
        <div className="">
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
    </div>
  );
};

export default log;
