function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("Rafid");

function sum(a, b){
    return a+b;
}
let resut = sum(4, 5);
console.log(resut);


let greet = name => console.log(`Hello, ${name}!`);
greet("Bob");

const greet1 = function(name){
    console.log(`Hello, ${name}!`);
};
greet1("Rafidddd");

function operateOnNumbers(a, b, operation){
    return operation(a, b);
}

function add(x, y){
    return x + y;
}

function multiply(x, y){
    return x * y;
}

let resultAddition = operateOnNumbers(5, 6, add);
let resultMultiplicatin = operateOnNumbers(5, 6, multiply);