let age = 23;

if(age >= 18){
    console.log("Adult");
}else if(age >= 13){
    console.log("teenager");
}else{
    console.log("minor");
}

let status;

switch(true){
    case age >= 18:
        status = "Adult";
        break;
    case age >= 13:
        status = "Teenager";
        break;
    default:
        status = "Minor";
}
console.log(status);

let x = ['a', 'b', 'c', 'd', 'e'];
for(let i=0; i<3; i++){
    console.log(x[i]);
}

var j = 0;
while(j<4){
    console.log(x[j]);
    j++;
}

var j =0;
do{
    console.log(x[j]);
    j++;
}while(j<3);

for(let i in x){
    console.log(x[i]);
}


for(let i of x){
    console.log(i);
}