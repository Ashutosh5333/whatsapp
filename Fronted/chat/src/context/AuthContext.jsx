import { createContext ,useState } from "react";
export const AuthContext = createContext()


export const  AuthContextProvider = ({children}) =>{
  const [user, Setuser] = useState({
     name:"Ashutosh",
     email:"Ashutosh@gmail.com",
     password:""
  })

   return <AuthContext.Provider
      value={{user}}
   >
       {children}
   </AuthContext.Provider>
}
