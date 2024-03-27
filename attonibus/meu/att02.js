const data = require('./onibus.json');
// const id = 0
// const horario = (data.onibus[id].horarios)
// console.log(horario)
// const idlinha = 2
// function mostrarHorario(idlinha){
//     return data.linhas[idlinha].horarios
// }
// console.log(mostrarHorario(idlinha))

//Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.

idLinha = 1
data.onibus.forEach((bus,index)=>{
    if (bus.linha == idLinha) {
        if (bus.status=='em operação') {    
            console.log(data.onibus[index])
    }else{
        console.log("não existem onibus disponíveis para essa linha")
    }
}
})