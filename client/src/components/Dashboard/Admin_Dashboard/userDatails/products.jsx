import React from 'react'
import { Button } from 'react-bootstrap';
import Form from "../../ProductForm.jsx"
function products() {
  return (
    <div className='flex'>
      {" "}
      <div className="flex-4 justify-between">
        {" "}
        <span className="font-extralight ml-20  shadow-amber-100 shrink shadow-inner p-2">
          {" "}
          Welcome to our Product Portal{" "}
        </span>
        <Button>
          {"hov"}
          <h1>Publised</h1>
        </Button>
      </div>
      <div className='flex-4 bg-slate-500'> <Form/></div>
    </div>
  );
}

export default products