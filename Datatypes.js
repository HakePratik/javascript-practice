//primitive
//str,number,boolean
const mark=100
const score=99.67
const LoggedIn=true
const outside=null
const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2);

const heroes=["prabhas","allaarjun","naga"];
let Myobj={name:"rashmika",film:"pushpa"}
const display=function() {
    console.log("hello nprimitive");
    
}
console.log(typeof id2);

//stack(primitive),heap(nooprimitive)
let dog="blackdog"
let dog2=dog
dog2="dogwhite"
console.log(dog);
console.log(dog2);
// asign new copy

const user1 ={
    email: "ram@gmail.com",
    upi: "ramesh@ynl"
} 
const user2 ={
    email: "rani@gmail.com",
    upi: "ramesh@ynl"
} 
console.log(user1);
console.log(user2);

//asign heap reference same var