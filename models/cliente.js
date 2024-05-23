// Cliente.js

/* 
• Módulo de cliente, el cual se manejan los siguientes datos: 

nombre, 
email, 
fecha creación 
fecha de actualización.


*/

const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true    
  },
  email: {
    type: String,
    required: true,
    unique: true
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


module.exports = mongoose.model('Cliente', clienteSchema);

