//arrow function
let cicleArea = function (r){
    let PI = Math.PI
    let area = PI * r * r
    return area.toFixed(2)
}
console.log(cicleArea(6))

let cicleArea2 = (r) =>{
    let PI = Math.PI;
    let area = PI * r * r;
    return area.toFixed(2);
}
console.log(cicleArea2(6)+5)

let cicleArea3 = (r) => (Math.PI * r * r).toFixed(2)
console.log(cicleArea3(2)+4);