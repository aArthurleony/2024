
const canditatos = []

const inCandidato = document.getElementById('inCandidato')
const inAcertos = document.getElementById('inAcertos')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnAprovados = document.getElementById('btnAprovados')

const outLista = document.getElementById('outLista')

const adicionarCandidato = () => {
    const canditato = inCandidato.value
    const acertos = Number(inAcertos.value)

    if(canditato === '' || acertos === 0 || isNaN(acertos)){
        alert('Digite valores válidos');
        return
    }
    canditatos.push({nome: canditato, nota: acertos})

    let lista = ''
    canditatos.forEach((canditato, index) => {
        return lista += `${index+1}. ${canditato.nome}: ${canditato.nota}\n`
    })

    inCandidato.textContent = ''
    inAcertos.textContent = ''
    outLista.textContent = lista
};
btnAdicionar.addEventListener('click', adicionarCandidato)

const aprovadoSegundaEtapa = () =>{
    const notaMinima = Number(prompt("Digite a nota para a 2º aprovação"))
    if(notaMinima == 0 || isNaN(notaMinima)){
        alert("nota inválida")
        return
    }

    const filtrarCandidatos = canditatos.filter((canditato) => {
        return canditato.nota >= notaMinima
    })
    const canditatosEmOrdem = filtrarCandidatos.sort((a,b) => {
        return b.nota - a.nota
    })

    let lista = ''
    canditatosEmOrdem.forEach((canditato) =>{
        return lista += `${canditato.nome} - ${canditato.nota}\n`
    })
    outLista.textContent = lista
}
btnAprovados.addEventListener('click', aprovadoSegundaEtapa)