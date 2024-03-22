const adicionar = document.getElementById('btnAdicionar')
const urgencia = document.getElementById('btnUrgencia')
const atender = document.getElementById('btnAtender')
const outAtendimento = document.getElementById('outAtendimento')
const lista = []
function Adicionar(){
    const paciente = document.getElementById('inPaciente').value
    if(paciente == ''){
        alert("Preencha os seguintes campos")
    }else{
        lista[lista.length] = paciente
        console.log(lista)
        
    }
    document.getElementById('outList').innerHTML = lista.join(`<br>`)
}
function Urgencia(){
    const paciente = document.getElementById('inPaciente').value
    if(paciente == ''){
        alert("Preencha os seguintes campos")
    }else{
        lista.unshift(paciente)
    }
    document.getElementById('outList').innerHTML = lista.join(`<br>`)

}
function Atender(){
    const paciente = document.getElementById('inPaciente').value
    if(paciente == ''){
        alert("Preencha os seguintes campos")
    }else{
        lista.shift(paciente)
    }
    
    document.getElementById('outAtendimento').innerHTML = lista.join(`<br>`)
}


