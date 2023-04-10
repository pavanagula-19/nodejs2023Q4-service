const mongoose = require("mongoose")
const albumSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    artistId:{
        type:String | null,
        required:true
    }
})

const Album = mongoose.model("albums", albumSchema)
module.exports = Album