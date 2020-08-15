const express = require('express')
const cors = require('cors')

const server = express()

server.listen(3000, () => {
    console.log("server online...")
})