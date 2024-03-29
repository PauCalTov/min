const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('User', userSchema);