import {useLocation} from "react-router-dom"

//const userId = queryParams.get("home","users","sales","products","transactions","email","feedback","controlManage","controlHelp");
 export let query = (params)=>{
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
   return  queryParams.get(params)
 }