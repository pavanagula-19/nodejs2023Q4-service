const mongoose = require("mongoose")
const trackSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    artistId:{
        type:String | null,
        required:true
    },
    albumId:{
        type:String | null,
        required:true
    },
    duration:{
        type:Number,
        required:true
    }
})

const Track = mongoose.model("tracks", trackSchema)
module.exports = Track