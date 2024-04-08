//Pesquisar e filtrar dados de um array
const numbers = [1,2,3,4,5]

// encontrar o primeiro elemento que satisfaz a condinção
const encontrado = numbers.find((num) => num > 2);
console.log(encontrado);
//cria um novo array com todos elementos que passaram no teste
const filter = numbers.filter((num) => num % 2 === 0);
console.log(filter);
//verifica se um array possui um determinado valor, retorna true ou false
const includes = numbers.includes(4, 2 )
console.log(includes);
// Todos os elementos do array passaram no teste de lógica da funçao
const every = numbers.every((num) => num % 2 === 0)
console.log(every)

//verifica se pelo menos um elemento do array satisfaz a condição
const some = numbers.some((num) => num % 2 === 0)
console.log(some)