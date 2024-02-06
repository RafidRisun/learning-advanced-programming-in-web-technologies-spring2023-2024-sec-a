function add(a:number, b:number): number{
    return a+b;
}
console.log(add(15, 15));

let addnum = (a: number, b: number): number => a+b;
console.log(addnum(15, 12));

//optional parameters
function addd(a: number, b:number, c?: number): number {
    return a+b+ (c??0); //c ?? 0 means 0 if not declared
}

//default parameters
function add2(a: number, b: number, c: number = 0): number{ //c is optional and defualt value is 0
    return a+b+c;
}

//rest parameter
function add3(...nums: number[]): number{
    let sum: number = 0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}

//overloading

//noUnused paramet