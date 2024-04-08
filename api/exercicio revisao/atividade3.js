const dobroF = (x) => 2 * x
const triploF = (x) => 3 * x

const resultado =  function (param, fun1, fun2){
    const dobro = fun1(param)
    const triplo = fun2(param)
    console.log("número "+param+"\ndobro = "+dobro+"\ntriplo = "+triplo)
}
resultado(2, dobroF, triploF)