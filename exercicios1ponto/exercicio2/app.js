// const numeros = []
// const inNumero = document.querySelector('.inNumero')
// const adicionar = document.getElementById('btnAdicionar')
// const btnAdicionar = document.getElementById('btnAdicionar')
// const outLista = document.getElementById('outLista')

// const adicionarNumero = () => {
//     const numero = inNumero.value

//     if (numero === '' || isNaN(numero)) {
//         alert('Por favor, insira um numero válido.')
//         return
//     }else{
//         if(numeros.indexOf(numero) != -1){
//             alert(`voce ja tem o ${numero} adicionado`)
//         }else{
//             numeros.push(numero)
//             alert('Numero adicionado')
//             outLista.textContent = numeros
//         }
//     }
//     inNumero.value = ''   
// }
// const verificarOrdem = () =>{

//     const ordemCrescente = (a,b) => a - b;
// if(numero )

// }

// btnAdicionar.addEventListener('click', adicionarNumero)
// btnAdicionar.addEventListener('click', verificarOrdem)
const numeros = []

const inNumero = document.getElementById('inNumero')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnVerificarOrdem = document.getElementById('btnVerificarOrdem')

const outNumeros = document.getElementById('outNumeros')
const outResposta = document.getElementById('outResposta')

const adicionarNumero = () =>{
    const numero = Number(inNumero.value)
    if(numero === 0 || isNaN(numero)){
        alert('número inválido')
        return
    }
    const numeroIgual = numero.includes(numero)
    if(numeroIgual){
        alert('numero repetido')
        inNumero.value = ''
        return
    }
    numeros.push(numero)

    outNumeros.textContent = `${numeros.join(', ')}`
    inNumero.value = ''
};
btnAdicionar.addEventListener('click', adicionarNumero);

const verificarOrdem = () => {
    if(numeros.length === 0){
        alert('não eixte elementos no array de numeros')
        return
    }
    const verificaArray = numeros.every((numero, index) =>{
        if(index === numeros.length - 1){
            return true
        }

        return numero < numeros[index +1]
    })
    if(verificaArray){
        outResposta.textContent = 'ordem Crescente'
    }else{
        outResposta.textContent = 'não estão em ordem crescente'
    }

}
btnVerificarOrdem.addEventListener('click', verificarOrdem);