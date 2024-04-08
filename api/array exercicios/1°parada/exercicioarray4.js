const numeros = [1, 2, 3, 4, 5]
const PorDois = numeros.map((elemento)=>{
    return (elemento * 2)
})
console.log(PorDois)
const PorTres = numeros.map((elemento)=>{
    return (elemento * 3)
})
console.log(PorTres)
valorinicial = 0
const soma = numeros.reduce((acumulador, valorAtual)=>{
    return acumulador + (valorAtual * 3) + (valorAtual *2)
},valorinicial)
console.log(soma)