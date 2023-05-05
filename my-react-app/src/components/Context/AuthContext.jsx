import { createContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();

function AuthContextProvider({children}){
    const[isAuth,setIsAuth]=useState(false);
    const[token,setToken]=useState("")
    const value={isAuth,token,setToken,setIsAuth}
    return(
<AuthContext.Provider value={value} >
    {children}
</AuthContext.Provider>
    )
}
export default AuthContextProvider;