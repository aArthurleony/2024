const numeros = []
const inNumero = document.querySelector('.inNumero')
const adicionar = document.getElementById('btnAdicionar')
const btnAdicionar = document.getElementById('btnAdicionar')
const outLista = document.getElementById('outLista')

const adicionarNumero = () => {
    const numero = inNumero.value

    if (numero === '' || isNaN(numero)) {
        alert('Por favor, insira um numero válido.')
        return
    }else{
        if(numeros.indexOf(numero) != -1){
            alert(`voce ja tem o ${numero} adicionado`)
        }else{
            numeros.push(numero)
            alert('Numero adicionado')
            outLista.textContent = numeros
        }
    }
    inNumero.value = ''   
}
const verificarOrdem = () =>{

    const ordemCrescente = (a,b) => a - b;
if(numero )

}

btnAdicionar.addEventListener('click', adicionarNumero)
btnAdicionar.addEventListener('click', verificarOrdem)
