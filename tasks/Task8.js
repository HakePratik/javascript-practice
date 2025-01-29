function stringinvowel(string){
    let vowel=0;
    for(let i of string){
        if (i=='i'||i=='a'||i=='e'||i=='o'||i=='u'){
            vowel+=1; 
        }
    }
    console.log(vowel);
    
}
stringinvowel("pratiiiik");
console.log("uv");
//print squere of each array element
let arr=[1,3,4,5,6];
arr.forEach((val)=>{
    console.log(val*val);  
})