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

