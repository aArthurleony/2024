// const tabela = []
// const inNome = document.querySelector('.inNome')
// const outLista = document.getElementById('outLista')
// const btnAdicionar = document.getElementById('btnAdicionar')
// const btnListar = document.getElementById('btnListar')
// const btnTabela = document.getElementById('btnTabela')
// const adicionarClube = () => {
//     const nome = inNome.value

//     if (nome === '' || !isNaN(nome)) {
//         alert('Por favor, insira um nome válido.')
//         return
//     }else{
//         if(tabela.indexOf(nome) != -1){
//             alert(`voce ja tem o time ${nome} adicionado`)
//         }else{
//             tabela.push(nome)
//             alert('Clube adicionado')
//         }
//     }
//     inNome.value = ''   
// }

// const listarClubes = () => {

//     if (tabela.length === 0) {
//         outLista.textContent = 'Não há clubes na lista.'
//         return
//     }else{
//        let lista = ''
//        lista += tabela
//        outLista.textContent += `${lista}\n`
//     }
// }
// const confrontos = () => {
//     if (tabela.length === 0) {
//         outLista.textContent = 'Não há clubes na lista.'
//         return
//     }else{
//         for(i = tabela.length; i)
//     }
// }

// btnAdicionar.addEventListener('click', adicionarClube)
// btnListar.addEventListener('click', listarClubes)
// btnTabela.addEventListener('click', confrontos)
// console.log(tabela)
const clubes = []
const inClube = document.getElementById('inClube')
const btnListar = document.getElementById('btnListar')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnMontar = document.getElementById('btnMontar')
const outLista = document.getElementById('outLista')

const adicionarClube = () => {
    const clube = inClube.value;
    if (clube === '') {
        alert("PREENCHA O CAMPO")
        inClube.focus()
        return
    }
    clubes.push(clube)
    inClube.value = ''
    inClube.focus()
}
btnAdicionar.addEventListener('click', adicionarClube)
const listarClubes = () =>{

    if(clubes.length === 0){
        alert("Não existe clubes cadastrados")
        return
    }

    let lista = ''
    clubes.map((clube, index) =>{
        return lista += `${index+1}. ${clube}\n`
    })
    outLista.textContent = lista
}
btnListar.addEventListener('click', listarClubes)

const montarJogos = () =>{
    if(clubes.length % 2 != 0 || clubes.length === 0){
        alert("Impossível montar uma tabela por conta da quantidade de clubes")
    }
    const metadeInicio = clubes.slice(0, clubes.length/2)
    const metadeFim = clubes.slice(clubes.length/2, clubes.length).reverse()
    console.log(clubes)
    console.log(metadeInicio)
    console.log(metadeFim)
    
    let lista = ``
    for(let i = 0; i < metadeInicio.length; i++){
        lista += `${i+1}. ${metadeInicio[i]} X ${metadeFim[i]}\n`
    }
    outLista.textContent = lista
}
btnMontar.addEventListener('click', montarJogos)