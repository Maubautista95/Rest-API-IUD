/*
Módulo de Universidad
nombre
dirección 
teléfono
fecha de creación
fecha de actualización
*/

const mongoose = require('mongoose');

const universidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
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

module.exports = mongoose.model('Universidad', universidadSchema, 'universidades');


