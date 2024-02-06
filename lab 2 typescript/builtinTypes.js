//any type
var data;
data = 'Something';
console.log(data);
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //color type has 3 variation
var x = Color.Red; //one variation is stored in color type variable 'x'
console.log(x); //the index will be the output
var employee;
employee = [1, "Steve"];
console.log(employee);
