//functions rules
//1)  you only need parentheses to build a function and to call a function
//2)  almost always, you need {} around the function body
//3)  usually, you should 'return' from a function
//4)  not all functions need to have names

//function ideas
//A)  they are used for repeated chunks of code, bu unlike loops,
//    the repeats don't have to happen consectively

// function print(){console.log(5)}

function print(number){console.log(number)}  // results undefined

let sampleNum = 10;
print(sampleNum);
print('Navi');

let print2 = () => {console.log(5)}
print2();

// function printPicker(number,firstFunc, secondFunc) {
function printPicker(number = 0, firstFunc = print, secondFunc = print2) {    
    if (number == 0) {
        firstFunc();
    } else {
        secondFunc();
    }
}

// printPicker(1, print, print2);
printPicker();

function newFunc(param) {console.log(param)};

let firstVar = newFunc;
let secondVar = newFunc;
let thirdVar = newFunc;

console.log(firstVar == secondVar);

let firstArrow = () => {console.log(20)};
let secondArrow = () => {console.log(20)};

let firstNum = 10;
let secondNum = 10;

console.log(firstNum == secondNum);


//slacked to class:

// there are 2 types of values in Javascript:
//1) primitives: number, string, udefined, boolean, symbols
//2) complex: arrays


//function rules
//1)  you only need parentheses to build a function and to call a function
//2)  almost always, you need {} around the function body
//3)  usually, you should 'return' from a function
//4)  not all functions need to have names

//function ideas
//A)  they are used for repeated chunks of code, but unlike loops,
//    the repeats don't have to happen consecutively
//B)  you need parameters in your functions when every time you use
//the function, it could run in a slightly different way

function print(){console.log('print')}

let print2 = () => {console.log('print2')}

function printPicker(number = 0, firstFunc = print, secondFunc = print2){
  if (number == 0){
    firstFunc();
    console.log('we are calling firstFunc, but it shows print2')
  } else {
    secondFunc();
    console.log('we are calling secondFunc, and it shows print2')
  }
}

printPicker(0, print2);

function newFunc() {console.log(20)};

let firstVar = newFunc;
let secondVar = newFunc;
let thirdVar = newFunc;

console.log(firstVar == secondVar);

let firstArrow = () => {console.log(20)};
let secondArrow = firstArrow;

console.log(firstArrow == secondArrow);

let firstNum = 10;
let secondNum = 10;

console.log(firstNum == secondNum);

//there are 2 types of values in Javascript:
//1) primitives: numbers, string, undefined, boolean, Symbols
//2) complex: arrays, objects, functions (classes)

//when you check for equality on primitives, you're checking that they
//'look' the same
//when you check for equality on complex types, you're checking that they
//point to the same 'thing'
