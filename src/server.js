const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.listen(3000, () => {
    console.log("server online...")
})