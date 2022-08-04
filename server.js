const express = require('express')
const expressLayouts = require('express-ejs-layouts')
// const mongoose = require('mongoose')
// const session = require('express-session')


const app = express()
const port = process.env.PORT || 3001
// const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.cfpcvlq.mongodb.net/?retryWrites=true&w=majority`

require('dotenv').config()

// Apply session middlewares
app.use(express.urlencoded( { extended: true } ))
app.use(express.static('public'))
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false, httpOnly: false} // cookie setting
//   }))
app.use(expressLayouts)

app.set('layout', './layouts/main') 
app.set('view engine', 'ejs') 

const routes = require('./server/routes/bookingsRoutes.js')
app.use('/', routes)

app.listen(port, ()=> console.log(`Listening to port ${port}`))
