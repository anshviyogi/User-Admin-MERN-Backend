const express = require('express')
const app = express()
const mongoose = require('./model/db')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Heroku
if(process.env.NODE_ENV == "production"){
    app.use(express.static('frontend/build'))
}

app.use('/',require('./Routes/dataRoute'))

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log("Server Started at PORT " + PORT)
})