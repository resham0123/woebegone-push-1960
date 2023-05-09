import {NavLink} from "react-router-dom";
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
        to:"/groups"  , label:"Teachers"
      },
      {
        to:"/login", label:"Login"
      }
]

function Navbar(){
 const activeStyle={textDecoration:"none",color:"black"};
  const normalStyle={textDecoration:"none",color:"red"};
return(
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",
    backgroundColor:"grey",margin:"10px",padding:"10px",fontSize:"20px"}} >
   {links.map((item)=>{
    
    return <NavLink style={{color:"#f5f5f5",fontFamily:"sans-serif",fontSize:"25px",textDecoration:"none"}} to={item.to}>{item.label}</NavLink>
    
   })} 
   <br/><br/>
    </div>
)
}
export default Navbar;