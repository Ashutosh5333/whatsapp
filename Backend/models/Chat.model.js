const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    members:Array,
},{
    timestamps:true,
} )

const Chatmodel = mongoose.model("chat",ChatSchema)

module.exports ={Chatmodel}