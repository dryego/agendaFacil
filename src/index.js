/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const express = require('express');
const rotaTeste = require('./router/rotaTeste');
const rotasCliente = require('./router/rotasCliente');

const app = express();

app.use(express.json());

app.use('/teste', rotaTeste);
app.use('/cliente', rotasCliente);

app.listen(process.env.PORT, console.log('Servidor Inicializado...'));
