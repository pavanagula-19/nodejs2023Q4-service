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
// user.get("/user/:id", async (req, res) => {
//     try {
//         const user = await User.find(
//             (user) => req.params.id == user.id
//         );
//         if (user) {
//             res.status(200).json({
//                 status: "sucsess",
//                 Data: user,
//             });
//         } else{
//             res.status(400).json({
//                 status: " userId is invalid"
//             })
//         }
//     }
//     catch (e) {
//         res.status(404).json({
//             status: "failed",
//             message: "id does not exist",
//         });
//     }
// })

user.put()
module.exports = user