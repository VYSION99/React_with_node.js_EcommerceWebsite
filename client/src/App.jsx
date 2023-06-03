//=> REQUESTING DEPENDENCIES
import {
BrowserRouter as Router,
 Routes,Route
} from 'react-router-dom'




import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Auth from  './components/Auth/auth'
import ResetPassword from  './components/Auth/ForgetPassword/Passwordreset'
import RecoveryPassword from  './components/Auth/ForgetPassword/passwordrecovery'

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Home"
import AdminHome from "./components/Dashboard/AdminHome"
import Admin from "./components/Administrator/auth/Admin"
import AdminAuthorize from "./components/Administrator/auth/AdminLogger"


function App() {
 

  return (
    <>
    <Router >
    <Header />

            <Routes>
                  <Route  path="/"  element={<Auth />}  />
                  <Route  path="/recovery"  element={<RecoveryPassword />}  />
                  <Route  path="/recovery/reset"  element={<ResetPassword />}  />
                  <Route  path="/dashboard"  element={<Dashboard />} />
                  <Route  path="/admin/v1/logger"  element={ <Admin />}  />
                  <Route  path="/admin/v1/logger/authorize"  element={<AdminAuthorize />}  />
                  <Route  path="/admin/v1/home"  element={<AdminHome />}  />
                  
                  
            </Routes>


    </Router>

    </>
  
  )
}

export default App
