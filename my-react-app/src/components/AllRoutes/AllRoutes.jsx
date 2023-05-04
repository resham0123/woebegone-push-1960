import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Student from "../Pages/Student";
import Group from "../Pages/Group";
import Class from "../Pages/Class";
import Login from "../Pages/Login";
function AllRoutes(){
return(
    <>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/students" element={<Student/>}/>
    <Route path="/groups" element={<Group/>}/>
    <Route path="/classes" element={<Class/>}/>
    <Route path="/login"  element={<Login/>}/>
    </Routes> 
    </>
)
}
export default AllRoutes;