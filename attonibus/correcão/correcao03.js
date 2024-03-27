const data = require('./onibus.json');

const listarParadasPorLinha = (idLinha) =>{
    const linha = data.linhas.find((linha) => linha.id === idLinha)
    console.log(linha)
    if(linha){
    const paradasOrdenadas = linha.paradas.sort((a,b)=> a.ordem - b.ordem)
    return {paradasOrdenadas}
    }else{
    return {message: "paradas não encontradas para linha solicitada"}
    }
}
const id = 1
const paradasPorLinha = listarParadasPorLinha(id)
console.log(paradasPorLinha)