import {FaChartLine,FaCommentsDollar,FaUserCircle,
    FaDollarSign,FaBullhorn ,FaComments, FaHandshake,  FaLaptop, FaHome, FaMailBulk, FaMastodon,FaArrowDown}  from "react-icons/fa"
  import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <div className="dashboard justify-between fixed justify-items-center ">
                 <div className="my-1 m">
                  <h2 className="text-slate-400 bg-opacity-20 shadow-sm">Dashboard</h2>
                  <div className=" justify-center justify-items-center my-3  ml-2">
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Home" 
                    className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaHome className="m-1 icon"/> <Link  to="?Optionhome" >Home</Link></h2>
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Analytics"
                     className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaChartLine className="m-1 icon"/> <Link  to="?Option=analytics">Analytics</Link></h2>
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Sales"
                     className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaCommentsDollar className="m-1 icon"/><Link  to="?Option=sales" >Sales</Link> </h2>
                  </div>
              </div>
                  <div className="my-1 ">
                  <h2 className="text-slate-400 bg-opacity-20 shadow-sm">Quick manu</h2>
                  <div className=" justify-center justify-items-center my-3  ml-2">
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="User Data"  
                    className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaUserCircle className="m-1 icon"/><Link  to="?Option=users" >Users</Link></h2>
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Product Available" 
                    className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaLaptop className="m-1 icon"/> <Link  to="?Option=products" >Products</Link></h2>
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Payment Details"
                     className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaDollarSign className="m-1 icon"/> <Link  to="?Option=transaction">Transaction</Link></h2>
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Sales Report" 
                    className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaBullhorn className="m-1 icon"/><Link  to="?Option=reports" title="report"> Reports</Link></h2>
                  </div>
              </div>
                  <div className="my-3 ">
                  <h2 className="text-slate-400 bg-opacity-20 shadow-sm">Notification</h2>
                  <div className=" justify-center justify-items-center my-3 ml-2">
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Mails Received"
                     className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaMailBulk className="m-1 icon"/><Link  to="?Option=Email">Email</Link></h2>
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Customers Feedback"
                     className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaComments className="m-1 icon"/><Link  to="?Option=feedback">Feedback</Link></h2>
                    
                  </div>
              </div>
                  <div className="my-3 ">
                  <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Help" className="text-slate-400 bg-opacity-20 shadow-sm">Staff</h2>
                  <div className=" justify-center justify-items-center my-4  ml-2">
                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Manegers Portal" 
                    className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                        <FaMastodon className="m-1 icon"/><Link  to="?Option=controlManage" >Management</Link></h2>

                    <h2 data-bs-toggle="tooltip"  data-bs-placement="bottom" title="Seek For Help"
                     className="flex items hover:bg-slate-600 active:bg-blue-600 rounded-sm m-1">
                    <FaHandshake className="m-1 icon"/><Link  to="?Option=conrtolhelp" title="help" >Help</Link>
                        </h2>
                   
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Navbar