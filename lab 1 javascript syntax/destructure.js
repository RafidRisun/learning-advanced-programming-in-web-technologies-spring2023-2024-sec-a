let numbers = [1, 2, 3];
let [a, b, c]= [1, 2, 3];
console.log(a, b, c);


let person = {name: "Rafid", age: 23};
let {name, age} = person;
console.log(name, age);

function printPersonData({name, age}){
    console.log(`Name: ${name}, age: ${age}`);
}
printPersonData(person);