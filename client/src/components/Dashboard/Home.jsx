import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Home() {
const navigate = useNavigate()
const {user } = useSelector((state) =>(state.Sign) || (state.Log))

useEffect(()=>{
  if ( !user) {navigate("/");}

},[user,navigate])


  return (
    <>
    <div className="container">
        <h1 className="bg-yellow-400">
            you are highly welcome
        </h1>
    </div>
    
    </>
  )
}

export default Home