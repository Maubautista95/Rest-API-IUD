//Tipo de proyecto

const mongoose = require('mongoose');

const tipoDeProyectoSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true,
    enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
});
 
module.exports = mongoose.model('TipoDeProyecto', tipoDeProyectoSchema, 'tiposDeProyecto');



/*
Módulo tipo de proyecto
*Nombre(ensayo, artículo, monografía, trabajo final de pregrado y trabajo final de especialización),
*fecha de creación
*fecha de actualización
*el sistema permitirá listar, crear y actualizar tipos de proyecto.


*/