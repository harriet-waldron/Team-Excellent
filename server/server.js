const path = require('path')
const express = require('express')

const server = express()

const answer = require('./routes/answer')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', answer)

module.exports = server
