import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Student from "../Pages/Student";
import Group from "../Pages/Group";
import Class from "../Pages/Class";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
function AllRoutes(){
return(
    <>
   <Routes>
    <Route path="/" element={<PrivateRoute> <Home/></PrivateRoute> } />
    <Route path="/students" element={<PrivateRoute> <Student/> </PrivateRoute> }/>
    <Route path="/groups" element={<PrivateRoute> <Group/> </PrivateRoute> }/>
    <Route path="/classes" element={<PrivateRoute>  <Class/> </PrivateRoute> }/>
    <Route path="/login"  element={<Login/>}/>
    </Routes> 
    </>
)
}
export default AllRoutes;