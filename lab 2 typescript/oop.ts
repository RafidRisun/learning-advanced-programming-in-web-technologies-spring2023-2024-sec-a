class Employee{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    display():void{
        console.log(`Id = ${this.id}, Name = ${this.name}`);
    }
}
let emp1 = new Employee(1, "Rafid");
emp1.display();


class Employee2{
    private id: number;
    private name: string;
    protected age: number;
    public isOkay: boolean;
    constructor(id: number, name: string, age: number, isOkay: boolean){
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    display():void{
        console.log(`Id = ${this.id}, Name = ${this.name} age = ${this.age} Isokay = ${this.isOkay}`);
    }
}
let emp2 = new Employee2(1, "Rafid", 23, true);
emp2.display();

