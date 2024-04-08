//estrutura de dados -> array

//|var - - - - - |
// const array = []
// array[1] = 3
// array[1] = 6

// const numero = 3
// numero = 5  
// const array = []
// const vetor = new Array()

// console.log(typeof array)
// console.log(typeof vetor)

//referência aos elenentos de um array
const produtos = ['arroz','feijão','iorgut']
console.log(produtos[3])

//inclusão e exclusão de elementos/itens
const estados = ['Alagoas']

estados.push("recife")//adiciona o elemento no final do array
console.log(estados)
//[0, 1, 2]
estados.unshift('bahia')//adiciona no início
console.log(estados)

estados.pop()//excluir no final do array
console.log(estados)

estados.shift()//excluir no início do array
console.log(estados)

//verificar o tamanho/quantidade de itens do array
const numeros = [1,2,3,4,5,6,]
console.log(`tamanho do array:${numeros.length}`)

//apresentar dados de um array
const cidades = ['maceio','rio largo','marechal']
console.log(`${cidades} \t ${cidades.toString()} \t ${cidades.join(' ::::: ')}`)