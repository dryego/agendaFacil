const cadastro = async (req, res) => {
  try {
    res.status(200).json({ menssagem: 'teste cliente OK!!' });
  } catch (error) {
    res.status(500).json({ menssagem: 'Erro no Servidor.' });
  }
};

module.exports = cadastro;
