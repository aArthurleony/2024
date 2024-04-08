const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
console.log("palavras = "+palavras)
const maisQue3 =palavras.filter((elemento) => {
    return elemento.length > 3
})
console.log(maisQue3)
