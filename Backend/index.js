 const express = require("express")
 const app = express()
 const http = require("http")
 const server = http.createServer(app)
const {Server} = require("socket.io")


 app.get("/",(req,res) =>{
    res.send("Hello welcome")
 })

 const io= new Server(server)

 // socket connection
  
 io.on("connection", (socket) =>{
    console.log("A User is connected")

    
 })


 server.listen(8000, () =>{
    console.log("listening on Port 8000")
 })