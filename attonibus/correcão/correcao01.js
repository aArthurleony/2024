const data = require('./onibus.json');
const horarioPorLinha = (idLinha) => {
    const linha = data.linhas.find((linha) => linha.id == idLinha)
    if (linha) {
        const horarios = linha.horarios.map((horario) => {
            return `Saída ${horario.saida}, chegada: ${horario.chegada}`
        });
        return horarios.join("\n")
    } else {
        return { message: "não foi rncontrada uma linha" }
    }
}

const id = 1
const horariosPorLinha = horarioPorLinha(id)
console.log(horariosPorLinha)