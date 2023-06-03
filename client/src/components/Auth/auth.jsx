import React from "react";
import BackgroundImg from "../../assets/laptop.png"
import {login,signUp } from "./validation";
import LoginForm from  "./logIn"
import Signup from "./Signup"
import {useSelector} from "react-redux"


function Auth() {

return (
  <div className="container-fluid  z[100] overflow-x-hidden">
       
        <div className="row">
    
          <div className=" bg-silver mb-4 col-auto col-md-6 col-lg-4">
              <div className="">
                <img
                  src="/codecamps.svg"
                  className="mx-auto md:w-24 w-12 mt-5 lg:24 mb-3"
                  alt=""
                />
                <span>
                  <h2 className=" text-center font-extralight"> codecamps</h2>{" "}
                </span>
                </div>
                <div className="">
                  <center className=" d-flex justify-center">
                    <ul className="d-flex flex-row-reverse  ">
                      <li className=" pointer-events-auto justify-center   cursor-pointer">
                        <span  onClick={login} className="pr-20  pl-3  ">
                          LogIn {""}
                          <hr style={{height:'0.010rem ', opacity:'10% ',}} className=" mt-2" id="hr1" />
                        </span>
                      </li>
                      <li className="justify-center  cursor-pointer pointer-events-auto">
                        <span onClick={signUp} className=" pr-20 pl-3">
                          SignUp{" "}
                          <hr style={{height:'0.010rem ', opacity:'10% ' , }} className="opacity-50 mt-2"  id="hr2"/>
                        </span>
                      </li>
                    </ul>
                  </center>
                  <h1  className="msg text-center shadow-md font-bold text-lg 
                   fst-italic mb-3 -mt-2 rounded-md">Register On Codecamps SuperStore</h1>
                  <center className="container " id="SignUp">
                  <Signup />
                  </center>
                  <span className="hidden container" onClick={login} id="logIn">
                  <LoginForm />
                  </span>
                </div>
              </div>
          <div
            className="bg-blend-luminosity col-auto col-md-6 col-lg-8"
            style={{ backgroundImage: `url(${BackgroundImg})` }}
          >
            Second Column
          
          </div>
        </div>
    </div>
    
  );
}


export default Auth;
