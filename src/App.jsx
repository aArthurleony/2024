const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana; // Aqui você pode mudar para mario se quiser exibir os dados de Mário
  const total = dados.compras.reduce((acc, item) => acc + Number(item.preco.replace("R$ ", '').replace(",", ".")), 0);

  return (
    <div>
      <p>cliente: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p>situação: <span style={dados.ativa ? { color: 'green' } : { color: 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>total: {total}</p>
    </div>
  );
};

export default App;
