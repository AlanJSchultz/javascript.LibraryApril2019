function newFunc(param) {console.log(param)};

let firstVar = newFunc;
let secondVar = newFunc;
let thirdVar = newFunc;

console.log(firstVar == secondVar);