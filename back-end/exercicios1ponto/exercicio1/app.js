const tabela = []
const inNome = document.querySelector('.inNome')
const outLista = document.getElementById('outLista')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnTabela = document.getElementById('btnTabela')
const adicionarClube = () => {
    const nome = inNome.value

    if (nome === '' || !isNaN(nome)) {
        alert('Por favor, insira um nome válido.')
        return
    }else{
        if(tabela.indexOf(nome) != -1){
            alert(`voce ja tem o time ${nome} adicionado`)
        }else{
            tabela.push(nome)
            alert('Clube adicionado')
        }
    }
    inNome.value = ''   
}

const listarClubes = () => {

    if (tabela.length === 0) {
        outLista.textContent = 'Não há clubes na lista.'
        return
    }else{
       let lista = ''
       lista += tabela
       outLista.textContent += `${lista}\n`
    }
}
const confrontos = () => {
    if (tabela.length === 0) {
        outLista.textContent = 'Não há clubes na lista.'
        return
    }else{
        for(i = tabela.length; i)
    }
}

btnAdicionar.addEventListener('click', adicionarClube)
btnListar.addEventListener('click', listarClubes)
btnTabela.addEventListener('click', confrontos)
console.log(tabela)
