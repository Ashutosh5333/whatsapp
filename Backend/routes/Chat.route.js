const express = require("express");
const { Chatmodel } = require("../models/Chat.model");
const ChatRouter = express.Router()


ChatRouter.post("/createchat", async (req, res) => {
      const {firstId, SecondId} = req.body;
    try {
        const chat = await Chatmodel.findOne({
            members:{$all:[firstId,SecondId]}
        })
        if(chat){
            return res.status(200).json(chat)
        } 

        const newChat = await new Chatmodel({
            members:[firstId,SecondId]
        })

        const responsone = await newChat.save()
            res.status(200).json(responsone)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


 // ---------------------  For particular user -----------------
  
ChatRouter.get("/getchat/:userId", async (req, res) => {
   const userId = req.params.userId
  try {
     const chats = await Chatmodel.find({
        members:{$in:[userId]}
     })    

     res.status(200).json(chats)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//   ---------------- single chat  -------------

ChatRouter.get("/getchat/:firstId/:SecondId", async (req, res) => {
    const {firstId,SecondId} = req.params

   try {
    const singlechat = await Chatmodel.findOne({
        members:{$all:[firstId,SecondId]}
    })   

      res.status(200).json(singlechat)
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });





  ChatRouter.get("/chat",(req,res) =>{
        res.send("welcome to chat")
   })

   module.exports={ChatRouter}