import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Student from "../Pages/Student";
import Group from "../Pages/Group";
import Class from "../Pages/Class";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import SingleStudent from "../Pages/SingleStudent";
import SingleTeacher from "../Pages/SingleTeacher";
function AllRoutes(){
return(
    <>
   <Routes>
    <Route path="/" element={<PrivateRoute> <Home/></PrivateRoute> } />
    <Route path="/students" element={<PrivateRoute> <Student/> </PrivateRoute> }/>
    <Route path="/groups" element={<PrivateRoute> <Group/> </PrivateRoute> }/>
    <Route path="/classes" element={<PrivateRoute>  <Class/> </PrivateRoute> }/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/students/:student_id" element={<PrivateRoute>
    <SingleStudent/>
    </PrivateRoute>
    }/>
    <Route path="/groups/:teacher_id" element={ <PrivateRoute> <SingleTeacher/>
    </PrivateRoute>
    }/>
    </Routes> 
    </>
)
}
export default AllRoutes;