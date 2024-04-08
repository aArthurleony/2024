const pessoa = {
    saudacacao: 'Olá, seus monstros',
    falar(){
        console.log(this.saudacacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()
//funcao bind
const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()

function Pessoa(){
    this.idade = 0
    // setInterval(function(){
    //     console.log(this.idade++)
    // }.bind(this), 1000)
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new Pessoa
function Pessoa2(){
    this.idade = 0
    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    })
}
new Pessoa2