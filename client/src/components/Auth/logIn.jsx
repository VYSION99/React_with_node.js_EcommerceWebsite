import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

import { Login, reset} from "../../redux/authRudux/loginSlice";

import { PSWD, Regex, Showpassword } from "./validation";

const log = () => {
  //=> setting state obj...
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  //=>state Data
  const { Email, Password } = formData;

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
    (state) => state.Log
  );

  useEffect(() => {
    if (isError) {
      document.querySelector(".error").innerHTML = message.msg;
    }

    if (user &&isSuccess ) {
      navigate("/dashboard");
    }
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
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
        <span className="text-red-600 font-extrabold error"></span>
        <div className=" shadow-sm ">
          <input
            className={
              !Email
                ? "form-control  my-2"
                : CheckEmail
                ? "form-control  my-2 is-valid"
                : "form-control  is-invalid my-2"
            }
            type="email"
            placeholder="Email"
            id="Email"
            name="Email"
            value={Email}
            onChange={onChange}
            required
          />

          <span className="font-extralight valid-feedback">
            Please Email is valid
          </span>
          <span className="font-extralight invalid-feedback">
            {" "}
            Email is invalid
          </span>
        </div>

        <div className="shadow-sm ">
          <input
            className={
              !Password
                ? "form-control  my-2"
                : CheckPassword
                ? "form-control  my-2 is-valid"
                : "form-control is-invalid my-2"
            }
            type="Password"
            placeholder="Password"
            id="Password"
            required
            name="Password"
            value={Password}
            onChange={onChange}
          />

          <span className="font-extralight invalid-feedback">
            Use at least 6-15 characters,digit and special character (eg.@,$){" "}
          </span>
          <span className="font-extralight valid-feedback">
            Strong Password
          </span>
        </div>

        <div className="flex my-4">
          <input type="checkbox" onClick={Showpassword} label="shope" className=" text-yellow-500 flex" />
           
         
          <small className=" text-yellow-500">  ShowPassword</small>
          <small className="ml-24 text-yellow-500">ForgetPassword</small>
        </div>

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
