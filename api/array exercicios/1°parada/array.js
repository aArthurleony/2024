const array = [21, 6,84, 24, 86, 11, 39, 59, 96, 53]
const array1 = [21, 6,84, 24, 86, 11, 39, 59, 96, 53]
// console.log(array[0,1 ,2 ,3 ,5])
// //Arrays -> métodos comuns

// //inserir dados
// array.push(5)//no final
// console.log(array)
// ////////////////////////////
// array.unshift(5)//no inicio
// console.log(array)
// //remover dados
// array.pop()
// console.log(array)//no final
// /////////////////////////////
// array.shift()
// console.log(arrray)//no inicio
///////////////////////////////////
// //Listar
//     array.forEach((elemento, indice) => {
//     console.log(indice +"-"+elemento)
// })
// const Listardados = (elemento) => console.log(elemento)
// array.forEach(Listardados)

//Método MAP (cria um novo array com o resultado)
// console.log(array)
// array.map((elemento)=>{
//     console.log(elemento * 3)
// })
// const ListarMap = elemento => console.log(elemento)
// array1.map(ListarMap)

const maiorQue30 = array.find((elemento) => {
    return elemento > 30

})
console.log(maiorQue30)

const maiorQue31 = array.filter((elemento)=>{
        return elemento > 31
})
console.log(maiorQue31)