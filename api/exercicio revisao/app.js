//ex 01
/*function soma(a, b){
    const soma = a + b
    if(soma > 5){
        console.log("valor nao permitido "+soma)
    }else{
        return soma
    }

}
console.log(soma(2, 2) + 4)//OK
console.log(soma(2))//NaN
console.log(soma())//NaN
console.log(soma(2,2,2,2,2,3,4,5,6))//
console.log(soma(2, 5) + 4)
*/


//ex 02

// function multiplicacao(){
//     let multi = 1
//     for( i in arguments){
//         multi *=arguments[i]
//     }
//     return multi
// }
// console.log(multiplicacao())
// console.log(multiplicacao(5))
// console.log(multiplicacao(5,5))
// console.log(multiplicacao(5,5,5))
// console.log(multiplicacao(5,5,5,5))
// console.log(multiplicacao(5,5,5,5,5))


//ex 03
// function triplo(x){
//     return 3 * x;
// };
// let triplo = function(){
//     return 3 * x;
// };
// triplo =  (x) => {
//     return 3 * x;
// };

// triplo = (x) => 3 * x;
// console.log(triplo(3) + 3);

// oi = (nome) => "OI, bisonhos"+nome;
// console.log(oi());

// oi = _ => "Oi, bisonhos"
// console.log(oi());

const soma = function(x, y){
    return x + y
}

const resultado = function(a, b , operacao = soma){
    console.log(operacao(a, b))
}
resultado(5, 5)
resultado(5, 5, soma)
resultado(5, 5, function(x, y){
    return x * y 
})
resultado(3, 3, (x, y)=> x / y )