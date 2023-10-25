// formatar datas
const data = new Date();
const data1 = new Intl.DateTimeFormat('pt-BR', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
}).format(data);

console.log(data1);

const valor = 50000;

// formatar valores
const valorFormatado = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(valor);

console.log(valorFormatado);
