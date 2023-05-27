export  const Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^-`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
   export const PSWD = /^(?=.*[1-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;

// starter JavaScript for disabling form submissions if there are invalid fields

export const validate = (values) => {
  const error = {};
  if (!values.FirstName) {
    error.FirstName = " Firstname is required";
  }
  if (!values.LastName) {
    error.LastName = " Lastname is required";
  }
  if (!values.Email) {
    error.Email = " email field is required";
  }else{
    if(!values.Email.match(Regex)){
      error.Email = "provided email is invalid";
    }
  }
  if (!values.Password) {
    error.Password = " password is required";
  }else{
    if(!values.Password.match(PSWD)){
      error.Password = " Use @ least 6 to 15 characters ,number and Symbols";
    }
  }
  
  return error;
};
  
  
  //for the next form drop down
  export  const FormNext = (e)=>{
    const more = document.getElementById("more")
    e.preventDefault();
    e.stopPropagation()
  if(more.classList.contains("hidden")){
    more.classList.remove("hidden")
  }else{
    more.classList.add("hidden")
  }
} //for the signUp switch form
export  const signUp = (e)=>{
    e.preventDefault();
    e.stopPropagation()  
    const HeaderMsg = document.querySelector('.msg')
    const hr1 = document.getElementById("hr1")
    const hr2 = document.getElementById("hr2")
    const Login = document.getElementById("logIn")
    const SignUp = document.getElementById("SignUp")
    
  if(SignUp.classList.contains("hidden")){
    SignUp.classList.remove("hidden")
    hr2.classList.add("opacity-50")
    hr1.classList.remove("opacity-50")
    Login.classList.add("hidden");
    setTimeout(()=>{
      HeaderMsg.innerText = "Register On Online Super Market"
    },1000)
  }

}
// for login form switch
  export  const login = (e)=>{
   const HeaderMsg = document.querySelector('.msg')
    const hr2 = document.getElementById("hr2")
    const hr1 = document.getElementById("hr1")
    const SignUp = document.getElementById("SignUp")
    const Login = document.getElementById("logIn")
  if(Login.classList.contains("hidden")){
    Login.classList.remove("hidden")
    SignUp.classList.add("hidden")
    hr1.classList.add("opacity-50")
    hr2.classList.remove("opacity-50")
    setTimeout(()=>{
      HeaderMsg.innerText = "Login To Online Super Market"
    },1500)
  }
}

  // media query intialization
  //const mobile = useMediaQuery({ minWidth:300,maxWidth: 400 });
  /* if(mobile){
 const  imgFlag = document.getElementById('');
 imgFlag.style.dispaly= "none";

  } */
    export const Showpassword = ()=>{
      var x = document.querySelector("#Password")
        if(x.type ==="password"){
          x.type = "text"
        }else{x.type = "password"}
    } 
   
   

   

  