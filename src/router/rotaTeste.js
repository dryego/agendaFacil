const express = require('express');

const controleTeste = require('../controller/controleTeste');

const rotas = express.Router();

rotas.get('/', controleTeste);

module.exports = rotas;
