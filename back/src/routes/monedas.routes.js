const { Router } = require('express')
const router = Router()

const monedaCtrl = require('../controllers/monedas.controller.js')
// CRUD
// CREATE - READ - UPDATE - DELETE

router.get('/coins/list', monedaCtrl.getMonedas); // muestra todo los usuarios
 
router.get('/:id', monedaCtrl.getMoneda); //obtiene un usuario por su id

module.exports = router