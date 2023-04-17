const express = require("express")
const user = express()
const User = require("../schemas/UserSchema")

user.use(express.json())
//user.use(express.urlencoded({extended: true }))
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

user.post("/user", async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            status: "success",
            newUser: newUser
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})
user.get("/user", async (req, res) => {
    try {
        const allUsers = await User.find()
        console.log(allUsers)
        res.status(200).json({
            status: "success",
            allUsers: allUsers
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})
user.get("/user/:id", async (req, res) => {
    try {
        let id = req.params.id
        console.log(id)
        const userId = await User.findById({_id:id})
        console.log(userId._id)
        if (id === userId._id) {
            res.status(200).json({
                status: "success",
                userId
            });
        } else{
            res.status(404).json({
                status: "failed",
                message: "id does not exist"
            })
        }
    }
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: " userId is invalid",
        });
    }
})

user.put("/user/:id", async (req, res) => {
    try {
        let id = req.params.id
        console.log(id)
        const updateId = await User.findByIdAndUpdate({_id:id})
        console.log(updateId._id)
        if (id == updateId._id) {
            res.status(200).json({
                status: "success",
                updateId
            });
        } else{
            res.status(404).json({
                status: "failed",
                message: "id does not exist"
            })
        }
    }
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: " userId is invalid"
        });
    }
})

user.delete("/user/:id", async (req, res) => {
    try {
        let id = req.params.id
        console.log(id)
        const deleteId = await User.findByIdAndDelete({_id:id})
        console.log(deleteId._id)
        if (id == deleteId._id) {
            res.status(204).json({
                status: "success",
                message:"Successfully deleted"
            });
        } else{
            res.status(404).json({
                status: "failed",
                message: "id does not exist"
            })
        }
    }
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: " userId is invalid",
        });
    }
})

module.exports = user