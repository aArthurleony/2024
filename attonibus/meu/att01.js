const data = require('./onibus.json');
// const id = 0
// const horario = (data.onibus[id].horarios)
// console.log(horario)
const idlinha = 1
function mostrarHorario(idlinha){
    return data.linhas[idlinha - 1].horarios
}
console.log(mostrarHorario(idlinha))