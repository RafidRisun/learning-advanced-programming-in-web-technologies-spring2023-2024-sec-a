const global = "Global";

function globalvariable(){
    console.log(global);
}

globalvariable();

function localvariable(){
    const local = "Local";
    console.log(local);
}

localvariable();

function createCounter(){
    let count = 0;
    
    return function(){
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();
counter();