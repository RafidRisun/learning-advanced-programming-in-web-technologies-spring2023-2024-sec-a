//generics
function display(id, name) {
    console.log("ID = ".concat(id, " Name = ").concat(name));
}
display(101, "Steve");
display("101", "Steve");
var Employee3 = /** @class */ (function () {
    function Employee3(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee3.prototype.display3 = function () {
        console.log(this.id, this.name);
    };
    return Employee3;
}());
var emp = new Employee3(23, "Rafid");
emp.display3();
