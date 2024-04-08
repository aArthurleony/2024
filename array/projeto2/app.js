const erros = [];
const numeroSorteado = Math.floor(Math.random() * 100) + 1;
const tentativas = 6

const btnApostar = document.getElementById('btnApostar')
const btnJogar = document.getElementById('btnJogar')

const apostarNumero = () =>{
    const inNumero = document.getElementById('inNumero')
    let numero = Number(inNumero.value)

    if(numero <= 0 || isNaN(numero)){
        alert('Número inválido')
        inNumero.focus()
        return
    }
    const outErros = document.getElementById('outErros')
    const outChances = document.getElementById('outChances')
    const outDica = document.getElementById('outDica')

//logica da aplicação
if(numero === numeroSorteado){
    alert('voce acertou!')
    btnApostar.disabled = true
    outDica.textContent = `parabens! numero sorteado${numeroSorteado}`
}else{
    if(erros.indexOf(numero) >= 0 ){
        alert(`você já apostou o ${numero}... tente outro`)
    }else{
        erros.push(numero)
        let numErros = erros.length
        let numChances = tentativas - numErros

        outErros.textContent = `${numErros} (${erros.join(', ')})`
        outChances.textContent = numChances
        if(numChances == 0 ){
            btnApostar.disabled = true
            outDica.textContent = `Fim de jogo! Número sorteado ${numeroSorteado}`
        }else{
            let outDica = numero < numeroSorteado ? "Maior" : "Menor"
            outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`
        }
    }
}


}
    btnApostar.addEventListener('click', apostarNumero)

btnJogar.addEventListener('click', ()=>{
    window.location.reload()
})