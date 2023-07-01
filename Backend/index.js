const { connection } = require("./config/db");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const { UserRouter } = require("./routes/user.route");
const { ChatRouter } = require("./routes/Chat.route");
const { MessageRouter } = require("./routes/Message.route");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello welcome");
});



app.use(
  cors({
    origin: "*",
  })
);

app.use(UserRouter)
app.use(ChatRouter)
app.use(MessageRouter)

const io = new Server(server);

// socket connection

let count = 0;

io.on("connection", (socket) => {
  console.log("A User is connected");
  count++;

  io.emit("newuser", count);

  socket.on("message", (msg) => {
    socket.broadcast.emit("usermsg", msg);
  });

  socket.on("disconnect", function () {
    count--;
    console.log("User Disconnected", count);
    io.emit("newuser", count);
  });
});

server.listen(8000, async () => {
   try{
     await connection
      console.log("connected to database")
   }catch(err){
     console.log(err)
   }
  console.log("listening on Port 8000");
});
