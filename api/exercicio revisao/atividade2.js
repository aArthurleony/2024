function tempoSegundos(x){
    horas = Math.floor(x / 3600)
    minutos = Math.floor((x % 3600) / 60)
    segundos = ((x % 3600) % 60)
    tempo = (horas+"H, "+minutos+"M, "+segundos+"S, ")
    return tempo
}
console.log(tempoSegundos(360))
