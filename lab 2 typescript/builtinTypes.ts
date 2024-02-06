//any type
let data: any;
data = 'Something';
console.log(data);

//enum type
enum Color {Red, Green, Blue}; //color type has 3 variation
let x: Color = Color.Red; //one variation is stored in color type variable 'x'
console.log(x); //the index will be the output

let employee: [number, string];
employee = [1, "Steve"];
console.log(employee);