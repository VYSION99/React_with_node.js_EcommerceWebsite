import React from 'react'
import {query} from "../Dashboard/Admin_Dashboard/params"
import {} from "../Dashboard/Admin_Dashboard/notification/feedback"
import Feedback from "../Dashboard/Admin_Dashboard/notification/feedback"
import Home from "../Dashboard/Admin_Dashboard/analysis/main"
import Products from "../Dashboard/Admin_Dashboard/userDatails/products"
import Transaction from "../Dashboard/Admin_Dashboard/userDatails/transaction"
import Users from "../Dashboard/Admin_Dashboard/userDatails/users"
import Sales from "../Dashboard/Admin_Dashboard/analysis/sales"
import Analytics from "../Dashboard/Admin_Dashboard/analysis/analytics"
import Mailboard from '../Dashboard/Admin_Dashboard/notification/Mailboard'


function ItemsRender() {

    const data =[
        'home','analytics','products','sales','transaction','users','email'
        ,'feedback'
    ]
    const Query = query("Option")
  
    console.log(data)
    return (
      <div>
        {Query== data[0] ?<Home/> : Query == data[1] ? <Analytics/> :Query == data[2]? <Products/>: Query == data[3]?<Sales/>: 
        Query == data[4] ? <Transaction/> : Query == data[5] ?<Users/> : Query == data[6] ? <Mailboard/>:
        Query == data[7] ? <Feedback/> : <Home/>
        }
      </div>
    )
  }

  
  
  export default ItemsRender