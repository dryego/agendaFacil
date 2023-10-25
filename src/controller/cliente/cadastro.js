const knex = require('../../connections/knex');
const buscaCliente = require('../../util/buscas/buscaCliente');

// eslint-disable-next-line consistent-return
const cadastroCliente = async (req, res) => {
  const { nome, email, telefone, dataNascimento } = req.body;
  try {
    if ((await buscaCliente(email)) !== undefined) {
      return res.status(400).json({ menssagem: 'Cliente já cadastrado.' });
    }
    const novoCliente = await knex('clientes')
      .insert({
        nome,
        email,
        telefone,
        data_nascimento: dataNascimento,
      })
      .returning('*');
    return res.json(novoCliente);
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssagem: 'Erro no Servidor.' });
  }
};

module.exports = cadastroCliente;
