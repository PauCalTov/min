const { Schema, model } = require('mongoose')

const walletSchema = new Schema({
    nombre: {type: String, required: true},
    moneda: {type: String, required: true},
    direccion: {type: String, required: true},
    saldo: {type: String, required: true},
    valor_inicial: {type: String, required: true},
    valor_actual: {type: String, required: true}
    
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Wallet', walletSchema);

// https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2