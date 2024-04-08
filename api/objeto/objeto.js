let pessoa = {
    nome: "Leoncio",
    idade: 16,
    altura: 1.79,
    enderecos: [
        modelo = {
            tipo: "residencial",
            rua: "rua A",
            cidade: "maceió",
        },
        {
            tipo: "comercial",
            rua: "rua B",
            cidade: "Salvador",
        },
    ],
    saudacao(){
        return "Olá mundo"
    }
}
//mostrar tudo
pessoa.enderecos.forEach((elemento, indice) => {
        console.log((indice + 1)+"-"+(elemento.rua))
});



// console.log(pessoa.nome, pessoa.idade)-
// console.log(pessoa.saudacao())
// console.log(pessoa.enderecos[0].rua,pessoa.enderecos[0].tipo,pessoa.enderecos[0].cidade)