const mongoose = require('mongoose')
const dotenv = require('dotenv')
const URL = "mongodb+srv://pavanagulla19:PAVAN123@cluster0.g6oghz3.mongodb.net/?retryWrites=true&w=majority"
const PORT = 4000
const user = require("./routes/UserRoute")

mongoose.connect(URL)
    .then(() => {
        console.log(`Connected to database`)
    })
    .catch(() => { console.log(`Not Connected to database`) })
user.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
