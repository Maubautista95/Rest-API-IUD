/*

Módulo de etapas: 
nombre (anteproyecto, entrega parcial 1, entrega parcial 2, y entrega final), 
fecha creación
fecha actualización, 
el sistema permitirá listar, crear y editar etapas.
enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización']
*/

const mongoose = require('mongoose');

const etapaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final']
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

module.exports = mongoose.model('Etapa', etapaSchema);





