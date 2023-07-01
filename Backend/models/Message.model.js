const mongoose = require("mongoose")

const MessageSchema = mongoose.Schema({
    chatId:String,
    senderId:String,
    text:String
},{
    timestamps:true,
} )

const Messagemodel = mongoose.model("message",MessageSchema)

module.exports ={Messagemodel}