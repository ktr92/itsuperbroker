const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.routes')
const managersRoutes = require('./routes/managers.routes')
const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/managers', managersRoutes)

module.exports = app
