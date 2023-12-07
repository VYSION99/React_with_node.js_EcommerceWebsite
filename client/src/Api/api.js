import axios from 'axios'


//=> API LINING UP
const API_user_Url = "user/";

//=> XHR TRANSFERING
export const API = axios.create({
   baseURL: "http://localhost:4000/api/v1/"
})

 export  const UserApi = async (userData)=>{

 const response = await  API.post(API_user_Url,userData )
 const data = response.data;
 if(data){
    localStorage.setItem('user', JSON.stringify(data))
  
 }
 return data

}
 export  const PasswordRecoveryApi = async (userData)=>{

 const response = await  API.post(API_user_Url +"reset/recovery",userData )
 const data = response.data;
 
 return data

}
 export  const PasswordResetApi = async (userData)=>{

 const response = await  API.post(API_user_Url +"reset",userData )
 const data = response.data; return data

}
 export  const UserLogApi = async (userData)=>{

 const response = await  API.post(API_user_Url + "login",userData )
 const data = response.data;
 if(data){
    localStorage.setItem('user', JSON.stringify(data))
  
 }
 return data

} 


export const AdminApi =async (AdminData)=>{
   const response = await API.post("Admin",AdminData)
   if(response.data){
      localStorage.setItem("admin", JSON.stringify(response.data))
   }
   return response.data
}

export const AdminLogApi =async (AdminData)=>{
   const response = await API.post("Admin/Log",AdminData)
   if(response.data){
      localStorage.setItem("admin", JSON.stringify(response.data))
   }
   return response.data
}

export const LOGOUTapi = async ()=>{
 localStorage.removeItem("user");
}
 
export const  ProductApi = async (product,token )=>{
    const config = {
           
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
   const response = await API.post("Admin/products",product,config)
if(response.data){ 
    localStorage.setItem("products", JSON.stringify(response.data));
}
   return response.data
}
export const  BULKApi = async (product )=>{
  
   const response = await API.get("Admin/product",product)

/*   if(response.data){ 
    localStorage.setItem("products", JSON.stringify(response.data));
}*/
   return response.data
}
 console.log(BULKApi())