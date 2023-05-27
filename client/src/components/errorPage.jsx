import React from 'react'
import {useRouteError} from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
  return (
    <div id = "errorPage container">
        <h1 className="text-center mt-10">!Oops</h1>
        <p className="text-center mt-7">sorry!  , an unexpected has occured <br />
        {error.statusText  || error.message}</p>
    
    </div>
  )
}

 