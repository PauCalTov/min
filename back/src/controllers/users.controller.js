const userCtrl = {}

const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}
userCtrl.getUser = async (req, res) => {    
    const user = await User.findById(req.params.id)
    res.send(user)
}
userCtrl.createUser = async (req, res) => {
    const newUser = new User(req.body)
    await newUser.save()
    res.send({status: 201, message: 'User creado'})
}
userCtrl.editUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: 204, message:"Usuari actualitzat"})
}
userCtrl.deletUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send({status: 204, message:"Usuari eliminat"})
}


module.exports = userCtrl