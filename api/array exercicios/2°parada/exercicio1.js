let produtos = [
{ nome: 'Camiseta', categoria: 'Roupas' }, 
{ nome: 'Celular', categoria: 'Eletrônicos' }];

let precos = [
{ nome: 'Camiseta', preco: 20 }, 
{ nome: 'Celular', preco: 500 }];

function combinarProdutoPreco(produtos, precos){
    return produtos.map((produto)=>{
        //encontrar o objeto correspondente do array de preço
        let precoProduto = precos.find((preco) => preco.nome === produto.nome)
        return{
            nome: produto.nome,
            categoria: produto.categoria,
            preco: precoProduto.preco,
        };
    });
}
const combinarProduto = combinarProdutoPreco(produtos, precos)
console.log(combinarProduto)