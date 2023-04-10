const mongoose = require("mongoose")
const favSchema = new mongoose.Schema({
    artists:{
        type:String,
        required:true
    },
    albums:{
        type:String,
        required:true
    },
    tracks:{
        type: string,
        required:true
    }
})

const Fav = mongoose.model("fav", favSchema)
module.exports = Fav