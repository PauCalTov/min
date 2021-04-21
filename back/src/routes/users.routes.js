const { Router } = require('express')
const router = Router()

const userCtrl = require('../controllers/users.controller.js')
// CRUD
// CREATE - READ - UPDATE - DELETE

router.get('/', userCtrl.getUsers); // muestra todo los usuarios

router.post('/', userCtrl.createUser); //crea user al hacer post /api/users que es la ruta por defecto
 
router.get('/:id', userCtrl.getUser); //obtiene un usuario por su id

router.put('/:id', userCtrl.editUser); //editar user por id

router.delete('/:id', userCtrl.deletUsers); //borrar user por id


module.exports = router