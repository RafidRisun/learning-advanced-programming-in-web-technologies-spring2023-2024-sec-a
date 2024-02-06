var numbers = [1, 2, 3, 4, 5]; //number type array
var firstElement = numbers[2];
var arrayLength = numbers.length;
numbers.push(6);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
var doubleNumbers = numbers.map(function (num) { return num * 2; });
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
var sum = numbers.reduce(function (prev, next) { return prev + next; });
console.log(doubleNumbers, evenNumbers, sum);
