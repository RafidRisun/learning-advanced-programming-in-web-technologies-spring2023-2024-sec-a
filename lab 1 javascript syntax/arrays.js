let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ['apple', 'mango', 'orange'];
let mixedArray = [1, 'two', {name: 'Alice'}, [7, 8, 9]];

let firstNumber = numbers[0];
let secondfruit = fruits[1];
let thirdElements = mixedArray[2];

numbers.push(6);
fruits.pop();
fruits.unshift('pear');
numbers.shift();

let numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(function(number){
    console.log(number);
});

let numbers3 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers3.map(function(number){
    return number * 2;
});
console.log(doubledNumbers);

const numbers4 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers4.filter(function (num){
    return num%2 == 0;
});
console.log(evenNumbers);