import {useState} from 'react'

export const motion = (spin) =>{
   const [loader,setloader] = useState(spin)
    setTimeout(()=>{
     setloader (!spin)
     
    },7000);

    return loader
}

export const once = {
    animationIterationCount: 1,
}


export const countdownTimer =(seconds, a,b)=> {
  setTimeout(async ()=>{
const countdownElement = document.querySelector("#message")
const countdown = document.querySelector(".test")
  console.log(countdown)
  let timer = setInterval(function () {
    countdownElement.textContent = `Time left: ${seconds} seconds`;
    seconds--;
    countdown.classList.remove("hidden" ,"opacity-0")
     countdownElement.classList.remove("hidden");

     countdownElement.classList.add("animate-bounce","-top-20");
    if (seconds < 0) {
      clearInterval(timer);
     countdownElement.textContent = "Time's up!";
      a(null)
      b(Date.now())
      countdownElement.classList.remove("animate-bounce");
      countdownElement.classList.add("text-red-500");
      countdown.classList.add("hidden")
      setTimeout(()=>{
          countdownElement.classList.add("hidden");

      },3000)
    }
  }, 1000);

},3000)
}



