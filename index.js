const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')
const app = express()
const port = 3001



app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/users', userRoutes)


app.listen(port, ()=> {
    console.log(`The server is listening on port ${port}.`)
})