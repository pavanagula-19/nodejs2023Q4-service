const express = require("express")
const artist = express()
const Artist = require("../schemas/ArtistSchema")

artist.use(express.json())
//user.use(express.urlencoded({extended: true }))
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

artist.post("/artist", async (req, res) =>{
    try{
        const newArtist = await Artist.create(req.body)
        res.status(201).json({
            status:"success",
            newArtist:newArtist
        })
    }
    catch(error){
        res.status(400).json({
            status:"failed",
            message:error.message
        })
    }
})
artist.get("/artist", async (req, res) =>{
    try{
        const allArtists = await Artist.find()
        res.status(200).json({
            status:"success",
            allArtists:allArtists
        })
    }
    catch(error){
        res.status(400).json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = user