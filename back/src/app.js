// Logica del servidor

const express = require('express')
const morgan = require('morgan')

// crear proyecto con express
const app = express()

app.set('port', process.env.PORT || 4000);

// ver peticiones por la consola
app.use(morgan('dev'))

app.use("/api/users", require('./routes/users.routes')) //ruta por defecto para este crud

module.exports = app;