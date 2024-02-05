let age = 20;
let status = (age>=18) ? "Adult" : "Minor";

let arr1 = [1, 2, 3];
let arr2 = [...arr1];

let arr3 = [4, 5, 6];
let combarr = [...arr1, ...arr3];

let newarr = [0, ...combarr, 7];

function sum(a, b, c){
    return a+b+c;
}

var result = sum(...arr1);

let obj1 = {name:'Risan', age: 23};
let obj2 = {...obj1};

let obj3 = {city: 'Dhaka', ...obj1};

function sum(...numbers){
    let total = 0;
    for (let number of numbers){
        total+=number;
    }
    return total;
}

var result = sum(1, 2, 3, 4, 5);
console.log(result);

result = sum(10, 20);
console.log(result);