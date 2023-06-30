import { createContext ,useCallback,useState } from "react";
export const AuthContext = createContext()


export const  AuthContextProvider = ({children}) =>{
  const [user, Setuser] = useState({
     name:"",
     email:"",
     password:""
  })

   const updatedregistered = useCallback((info) =>{
      Setuser(info)
   },[])

   // console.log("authcontexctuser",user)

   return <AuthContext.Provider
      value={{user ,updatedregistered}}
   >
       {children}
   </AuthContext.Provider>
}
