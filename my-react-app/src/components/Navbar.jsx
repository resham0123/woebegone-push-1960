import {NavLink  } from "react-router-dom";
const links=[
    {
      to:"/"   , label:"Home"
    },
    {
        to:"/students"  , label:"Students"
      },
      {
        to:"/classes"  , label:"Classes"
      },
      {
        to:"/groups"  , label:"Groups"
      },
      {
        to:"/login", label:"Login"
      }
]

function Navbar(){
 const activeStyle={textDecoration:"none",color:"black"};
  const normalStyle={textDecoration:"none",color:"red"};
return(
    <div style={{display:"flex",justifyContent:"space-around"}} >
   {links.map((item)=>{
    
    return <NavLink style={(isActive)=>isActive?activeStyle:normalStyle} to={item.to}>{item.label}</NavLink>
    
   })} 
    </div>
)
}
export default Navbar;