const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
// const mongoose = require('mongoose')
// const session = require('express-session')

const app = express()
const port = process.env.PORT || 3001
// const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.cfpcvlq.mongodb.net/?retryWrites=true&w=majority`

require('dotenv').config() // for storing all database details

// middlewares
app.use(express.urlencoded( { extended: true } ))
app.use(express.static('public'))
app.use(expressLayouts)

app.use(cookieParser('GalaxyAtelierSecure'))
app.use(session({
    secret: 'GalaxyAtelierSecretSession',
    saveUninitialized: true,
    resave: true
}))
app.use(flash())
app.use(fileUpload())

app.set('layout', './layouts/main') 
app.set('view engine', 'ejs') 

const routes = require('./server/routes/bookingsRoutes.js')
app.use('/', routes)

app.listen(port, ()=> console.log(`Listening to port ${port}`))
