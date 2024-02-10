var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name));
    };
    return Employee;
}());
var emp1 = new Employee(1, "Rafid");
emp1.display();
var Employee2 = /** @class */ (function () {
    function Employee2(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    Employee2.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name, " age = ").concat(this.age, " Isokay = ").concat(this.isOkay));
    };
    return Employee2;
}());
var emp2 = new Employee2(1, "Rafid", 23, true);
emp2.display();
