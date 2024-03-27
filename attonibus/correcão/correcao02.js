const data = require('./onibus.json');
const contarOnibusDisponivelPorLinha = (idLinha) =>{
    const onibusDaLinha = data.onibus.filter((onibus) => onibus.linha === idLinha)
    return onibusDaLinha.length != 0 ? {onibusDaLinha} : {message: 'não tem onibus para essa linha'}
}
const id = 2
const onibusDisponivel = contarOnibusDisponivelPorLinha(id)