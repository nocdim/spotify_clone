const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()

require('dotenv').config()

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server operating... PORT: ' + port)
})