//variable type annotation
let a: number = 10;
let b: string = "Hello";
let c: boolean = true;

//parameter type return type
function add(a: number, b: number): number{
    return a+b;
}
console.log(add(10, 20));


//type allias
type Person = { id: number, name: string };
let p: Person = { id:21, name: "Rafid"};
console.log(p);


//union
let y: number | string;
y = 10;
console.log(y);

//literal type
let color: "Red" | "Green" | "Blue";
color = "Red";
console.log(color);