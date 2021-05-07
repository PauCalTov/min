const { Schema, model, Mongoose } = require('mongoose')

const userSchema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('User', userSchema);

// https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2