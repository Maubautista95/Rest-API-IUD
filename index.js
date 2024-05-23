require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoString = process.env.DATABASE_URL;

const routeClientes = require('./routes/routeCliente');
const routeEtapa = require('./routes/routeEtapa');
const routeProyecto = require('./routes/routeProyecto');
const routeTipoDeProyecto = require('./routes/routeTipoDeProyecto');
const routeUniversidad = require('./routes/routeUniversidad');

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});

app.use('/clientes', routeClientes);
app.use('/etapas', routeEtapa);
app.use('/proyectos', routeProyecto);
app.use('/tiposDeProyecto', routeTipoDeProyecto);
app.use('/universidades', routeUniversidad);
