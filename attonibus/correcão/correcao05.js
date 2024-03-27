const data = require('./onibus.json');

const infoOnibus = (idOnibus)=>{
    const encontrarOnibus = data.onibus.filter((onibus) => onibus.id === idOnibus)
    return encontrarOnibus != 0 undefined ? encontrarOnibus : {message: 'mensagem'}
 }
 const onibus = 'A100'
 const onibusInfo = infoOnibus(onibusID)
 console.log(onibusInfo)  