const criancas = []

const inNome = document.querySelector('.inNome')
const inIdade = document.querySelector('.inIdade')

const outLista = document.getElementById('outLista')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

const adicionarCrianca = () => {
    const nome = inNome.value
    const idade = parseInt(inIdade.value)

    if (!nome || isNaN(idade) || idade <= 0) {
        alert('Por favor, insira um nome válido e uma idade válida.')
        return
    }

    criancas.push({ nome, idade })

    inNome.value = ''
    inIdade.value = ''

    alert('Crianca adicionada')
}

const listarCriancas = () => {
    outLista.textContent = ''

    if (criancas.length === 0) {
        outLista.textContent = 'Não há criancas na lista.'
        return
    }

    criancas.forEach((crianca) => {
        outLista.textContent += `- ${crianca.nome} - ${crianca.idade} anos\n`
    })
}

const filtrarPorIdade = () => {
    const idadeMin = parseInt(prompt('Insira a idade mínima:'))

    if (isNaN(idadeMin) || idadeMin < 0) {
        alert('Por favor, insira idades válidas.')
        return
    }

    const criancasFiltradas = criancas.filter(crianca => crianca.idade >= idadeMin)

    outLista.textContent = ''

    if (criancasFiltradas.length === 0) {
        outLista.textContent = 'Não há criancas dentro desse intervalo de idade.'
        return
    }

    criancasFiltradas.forEach((crianca) => {
        outLista.textContent += `${crianca.nome} - ${crianca.idade}\n`
    })
}
btnAdicionar.addEventListener('click', adicionarCrianca)
btnListar.addEventListener('click', listarCriancas)
btnFiltrar.addEventListener('click', filtrarPorIdade)
console.log(tab)