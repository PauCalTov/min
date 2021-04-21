require('./database')
const app = require('./app')

// lanzar servidor y escuchar puerto 3000
app.listen(app.get('port'));
console.log("Servidor en puerto", app.get('port'));