const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const port = process.env.PORT || 3000
const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.cfpcvlq.mongodb.net/?retryWrites=true&w=majority`

require('dotenv').config()

// Set view engine
app.set('view engine', 'ejs')

// Apply session middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false} // cookie setting
  }))

// routes
app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(port, async () => {
  try {
      await mongoose.connect(connStr, { dbName: 'Galaxy_Atelier'})
  } catch(err) {
      console.log(`Failed to connect to DB`)
      process.exit(1)
  }

  console.log(`Example app listening on port ${port}`)
})