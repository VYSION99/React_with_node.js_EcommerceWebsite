export  const Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^-`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
   export const PSWD = /^(?=.*[1-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

// starter JavaScript for disabling form submissions if there are invalid fields


  
  
  //for the next form drop down
  export  const Slider = (e)=>{
    const more = document.querySelector(".more")
    // console.log(more)
    
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
      HeaderMsg.innerText = "Register On Codecamps SuperStore"
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
      HeaderMsg.innerText = "Login To Codecamps SuperStore"
    },1500)
  }
}

  // media query intialization
  //const mobile = useMediaQuery({ minWidth:300,maxWidth: 400 });
  /* if(mobile){
 const  imgFlag = document.getElementById('');
 imgFlag.style.dispaly= "none";

  } */
   
     export const showPass = ()=>{
      var x = document.querySelector("#Password")
      var y = document.querySelector("#Password1")
      
        if(x.type ==="password" || y.type ==="password"){
          x.type = "text"
          y.type = "text"
        }else{
          x.type = "password"
          y.type = "password"
        }
      
       }
    
   
   
   

   

  