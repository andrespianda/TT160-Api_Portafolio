const express = require('express');
const  router = express.Router()
const proyectosController = require('../controller/controller.proyecto')

router.get("/", proyectosController.proyctosList)
router.post("/", proyectosController.createProyecto)
router.get("/:id", proyectosController.obtenerProyecto)
router.put("/:id", proyectosController.modificarProyecto)
router.delete("/:id", proyectosController.eliminarProyecto)


module.exports = router