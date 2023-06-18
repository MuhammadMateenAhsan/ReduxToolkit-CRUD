const express = require('express')
const app = express()
const connectDB = require('./config/db.js')
const route = require('./routes/allRoutes.js')
const env = require('dotenv').config()
const port = process.env.port || 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())
connectDB()
app.use('/',route)
app.listen(port,()=>console.log(`server is running on port ${port}`))