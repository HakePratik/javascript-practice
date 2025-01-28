//writw a for o to 100 even number print
for(i=0;i<101;i++){
    console.log("number is",i);
}
//guess write number
let gamenumber=5;
let number=prompt("enter a number");
while(number!=gamenumber){
    number=prompt("you guess wrong number. guess again");
}
console.log("you guess write number!");
