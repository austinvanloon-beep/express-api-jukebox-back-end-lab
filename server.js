require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const methodOverride = require('method-override')

const app = express()

//   middelware
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(methodOverride('_method'))

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

// route
const tracksRouter = require('./controllers/tracks')
app.use('/tracks', tracksRouter)


app.listen(3000, () => {
  console.log('Express app running on port 3000')
})
