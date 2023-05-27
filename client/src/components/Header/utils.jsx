import { useEffect } from "react"
import { useSelector } from "react-redux"
import {FaUserCheck} from  "react-icons/fa"
function utils() {

  //=> GETTING USER NAME
  const {user} = useSelector((state)=> state.auth)
  useEffect(()=>{},[user])
  const name = user.UserName.toString().toUpperCase()

  return (
<div className=" bg-yellow-500 flex shadow-2xl p-2  border-r-red-800 rounded-l-sm " >

    </div>
  )
}

export default utils