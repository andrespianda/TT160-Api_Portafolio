const ProyectosModel = require('../models/proyectos');

exports.Hola = (req, res) => {
    console.log("hola desde el controlador");
    res.send("hola desde el controlador");
}

exports.proyctosList = async (req, res) => {
    try {
        const proyectosList = await ProyectosModel.find({});
        return res.status(200).json(proyectosList);
        
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.createProyecto = async (req, res) => {
    try {
        // console.log(req.body)
        const proyecto =req.body;
        await ProyectosModel.create(proyecto);
        return res.status(201).json({message: "Proyecto creado exitosamente"});
        // return res.send(req.body)
    } catch (error) {
        
    }
}

exports.obtenerProyecto = async (req, res) => {
try {
    const {id} = req.params;
    const proyecto = await ProyectosModel.findById(id);
    return res.status(200).json(proyecto);
} catch (error) {
    return res.status(500).send(error);
    
}
}

exports.modificarProyecto = async (req, res) => {
    try {
        const {id} = req.params;
        const proyecto = req.body;
        const proyectoCambiado = await ProyectosModel.findByIdAndUpdate(id, proyecto, {new: true});
        return res.status(200).json({message: "Proyecto modificado exitosamente",proyecto});
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.eliminarProyecto = async (req, res) => {
    try {
        const {id} = req.params;
        //const proyectoEliminado =
         await ProyectosModel.findByIdAndDelete(id, {new: true});
        return res.status(200).json({message: "Proyecto Eliminado exitosamente"});
    } catch (error) {
        return res.status(500).send(error);
    }
}
