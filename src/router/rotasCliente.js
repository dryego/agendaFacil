/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cadastro = require('../controller/cliente/cadastroCliente');

const rotas = express.Router();

rotas.get('/cadastro', cadastro);

module.exports = rotas;
