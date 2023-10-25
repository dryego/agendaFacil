const formatarData = (data) => {
  new Intl.DateTimeFormat('pt-BR', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(data);
};

module.exports = formatarData;
