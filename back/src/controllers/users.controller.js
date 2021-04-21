const userCtrl = {}

userCtrl.getUsers = (req, res) => {
    res.send('get users')
}
userCtrl.getUser = (req, res) => {    
    res.send('get an user')
}
userCtrl.createUser = (req, res) => {
    res.send('create user')

}
userCtrl.editUser = (req, res) => {
    res.send('edit users')
}
userCtrl.deletUsers = (req, res) => {
    res.send('delete users')
}


module.exports = userCtrl