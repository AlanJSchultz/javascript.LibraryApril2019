function func1 (input){  //'Input' refers to func2 from below - line 118.
    return input(Math.floor(Math.random()*10));
}
function func2(num){  //'func2 only runs because of 'func1'
    return num + ': i am a number';
}

console.log(func1(func2));
