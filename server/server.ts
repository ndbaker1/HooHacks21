const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

const port = process.env.port || 8000

app.listen(port, () => {
  console.log('SERVER LISTENING ON PORT ' + port)
})