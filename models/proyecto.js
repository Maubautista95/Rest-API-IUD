
const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    unique: true
  },
  titulo: {
    type: String,
    required: true
  },
  fechaIniciacion: {
    type: Date,
    required: true
  },
  fechaEntrega: {
    type: Date,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  tipoDeProyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoDeProyecto',
    required: true
  },
  universidad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Universidad',
    required: true
  },
  etapa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Etapa',
    required: true
  }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);


/*
Módulo de proyecto en el cual se manejan los siguientes datos: 
numero (campo único),
título, fecha iniciación, fecha entrega, valor, fecha creación, fecha de actualización, cliente
que requiere el servicio, tipo de proyecto, universidad y etapa del proyecto, el sistema
permitirá listar, crear y editar proyectos.
 */