// let produtos = [
//     { nome: 'Camiseta', categoria: 'Roupas' }, 
//     { nome: 'Celular', categoria: 'Eletrônicos' }];
    
//     let precos = [
//     { nome: 'Camiseta', preco: 20 }, 
//     { nome: 'Celular', preco: 500 }];
    
//     function combinarProdutoPreco(produtos, precos){
//         return produtos.map((produto)=>{
//             //encontrar o objeto correspondente do array de preço
//             let precoProduto = precos.find((preco) => preco.nome === produto.nome)
//             return{
//                 nome: produto.nome,
//                 categoria: produto.categoria,
//                 preco: precoProduto.preco,
//             };
//         });
//     }
//     const combinarProduto = combinarProdutoPreco(produtos, precos)
//     console.log(combinarProduto)
//     //att02
//     function buscarPorcategoria(arrayDeProduto, categoria){
//         return arrayDeProduto.filter((produto) => produto.categoria === categoria);
//     }
//     const categoriaProduto = buscarPorcategoria(combinarProduto, "Roupas")
//     console.log(categoriaProduto)
    //att03
    // let produtos = [
    //     { nome: 'Camiseta', preco: 20 }, 
    //     { nome: 'Celular', preco: 500 }];
    
    //     let quantidades = [3, 1];
    
    //     function precoTotal(produtos, quantidades){
    //         return produtos.map((produto, index)=>{
    //             let precoVenda = produto.preco * quantidades[index]
    //             return{
    //                 nome: produto.nome,
    //                 preco: produto.preco,
    //                 valorTotal: precoVenda,
    
    //             }
    
                
    //         })
    
    //     }
    //     const precoVendaProduto = precoTotal(produtos, quantidades)
    //     console.log(precoVendaProduto)
        //att04
        let mercadoria = [
            { nome: 'Camiseta', preco: 20 },
            { nome: 'Celular', preco: 500 },
            { nome: 'Caneca', preco: 10 },
          ];

          function precoMinimo(arrayProduto, valorMinimo){
            return arrayProduto.filter((produto)=>produto.preco >= valorMinimo);
       }
       const produtoAcimaDoMinimo = precoMinimo(mercadoria, 500);
       console.log(produtoAcimaDoMinimo);