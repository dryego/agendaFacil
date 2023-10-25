/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cadastroCliente = require('../controller/cliente/cadastro');

const rotas = express.Router();

rotas.post('/cadastro', cadastroCliente);

module.exports = rotas;
