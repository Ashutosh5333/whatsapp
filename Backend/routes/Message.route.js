const express = require("express");
const { Messagemodel } = require("../models/Message.model");
const MessageRouter = express.Router();

MessageRouter.post("/createmsg", async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const newMsg = new Messagemodel({ chatId, senderId, text });
  try {
    const response = await newMsg.save();
    res.status(200).json(response);
  } catch (err) {
    console.log("error", err);
    res.status(500).json(err);
  }
});

//   ----------------  get All message of certain user ---------------- //

MessageRouter.get("/message/:chatId", async (req, res) => {
  const { chatId } = req.params;
  try {
    const message = await Messagemodel.findOne({ chatId });
    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

MessageRouter.get("/msg", (req, res) => {
  res.send("welcome to chat");
});

module.exports = { MessageRouter };
