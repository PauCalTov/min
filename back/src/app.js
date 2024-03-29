// Logica del servidor

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

// crear proyecto con express
const app = express()

app.set('port', process.env.PORT || 4000);

// ver peticiones por la consola
app.use(morgan('dev'));
// para aceptar peticiones de otros puertos etc
app.use(cors());
//para que entienda json
app.use(express.json());
//para que entienda html
app.use(express.urlencoded({extended: false}));


app.use("/api/users", require('./routes/users.routes')); //ruta por defecto para este crud

module.exports = app;