const express = require('express');
const  router = express.Router()
const proyectosController = require('../controller/controller.proyecto')

router.get("/a", proyectosController.Hola)


module.exports = router