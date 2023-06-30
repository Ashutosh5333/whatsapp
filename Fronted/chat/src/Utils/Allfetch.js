import axios from "axios"

export const baseurl = "http://localhost:8000/"


export const SignupPost = async () =>{
     try{
      const res = await axios.post(`baseurl/signup`)
      const data = await res.json()
      console.log("data",data)
     }
     catch(err){
        console.log(err)
     }

}