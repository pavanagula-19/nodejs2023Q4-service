const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    login:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    version:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Number,
        required:true
    },
    updatedAt:{
        type:Number,
        required:true
    }
})

const User = mongoose.model("users", userSchema)
module.exports = User