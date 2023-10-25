const knex = require('../../connections/knex');

const buscaCliente = async (email) => {
  const cliente = await knex('clientes').where({ email }).first();

  return cliente;
};

module.exports = buscaCliente;
