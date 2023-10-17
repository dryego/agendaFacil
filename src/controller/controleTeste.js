const controleTeste = async (req, res) => {
  try {
    res.status(200).json({ menssagem: 'teste OK!!' });
  } catch (error) {
    res.status(500).json({ menssagem: 'Erro no Servidor.' });
  }
};

module.exports = controleTeste;
