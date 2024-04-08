const numeros = [1, 2, 3, 4, 5]
console.log(numeros)
const soma = numeros.reduce((acumulador, valorAtual) =>{
    return acumulador + valorAtual
})
console.log("a soma de todos os elementos é = "+soma)
