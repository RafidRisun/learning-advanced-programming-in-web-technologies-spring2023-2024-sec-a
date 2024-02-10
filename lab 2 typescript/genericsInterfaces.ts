//generics
function display<T>(id: T, name: T):void{
    console.log(`ID = ${id} Name = ${name}`);
}
display<number | string>(101, "Steve");
display<string>("101", "Steve");

//interface
interface IEmployee{
    id: number;
    name: string;
    display3(): void;
}
class Employee3 implements IEmployee{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    display3():void{
        console.log(this.id, this.name);
    }
}
let emp = new Employee3(23, "Rafid");
emp.display3();