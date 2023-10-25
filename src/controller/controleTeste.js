const controleTeste = async (req, res) => {
  const { nome, idadie } = req.body;
  try {
    console.log(nome);
    res.status(200).json({ menssagem: 'teste OK!!', nome, idadie });
  } catch (error) {
    res.status(500).json({ menssagem: 'Erro no Servidor.' });
  }
};

module.exports = controleTeste;
