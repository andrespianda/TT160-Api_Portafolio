mongoose = require('mongoose');

const schema = mongoose.Schema;

const proyectoSchema = new schema({
    nombre: {
        type: String,
        required: true,
        maxLength: 100
    },
    imagen: {
        type: String,
        required: true,
        maxLength: 100
    },
    repo:{
        type: String,
        required: true,
        maxLength: 100
    },
    tecnologias: {
        type: [String],        
    },
    descripcion: {
        type: String,
        required: true,
        maxLength: 500
    },
})