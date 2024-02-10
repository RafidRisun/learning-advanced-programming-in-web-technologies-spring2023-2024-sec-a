function add(a, b) {
    return a + b;
}
console.log(add(15, 15));
var addnum = function (a, b) { return a + b; };
console.log(addnum(15, 12));
//optional parameters
function addd(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0); //c ?? 0 means 0 if not declared
}
//default parameters
function add2(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
//rest parameter
function add3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
function addnumbers4(a, b) {
    return a + b;
}
console.log(addnumbers4(10, 20));
