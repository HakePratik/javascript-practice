//if statement
let age=25;
if (age>18){
    console.log("vote allowed");
}
if (age<18){
    console.log("not voting allowed");
}
let color;
let mode="white";
if (mode==="dark"){
    color="black";
}
if (mode==="light"){
    color="white";
}
//if else statement

if(mode==="dark"){
    color="black";
}else{
    color="white";
}
console.log(color);
//evenodd code
let number=37;
if(number%2==0){
    console.log(number,"is even");
}else{
    console.log(number,"is odd");
}
//if else if
if (age>18){
    console.log("adult");
}
else if (age<60){
    console.log("midle");
}else{
    console.log("old");
}

//important ternary operator ?
let theme= mode==="dark"?"balck":"white";
console.log(theme);