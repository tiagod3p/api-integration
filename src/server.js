const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const server = express()

const name = process.env.DB_NAME
const pass = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://developer:${pass}@development.1hu5y.mongodb.net/${name}?retryWrites=true&w=majority`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection succeed")
}).catch((err) => {
    console.log(err)
})

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.listen(3000, () => {
    console.log("server online...")
})