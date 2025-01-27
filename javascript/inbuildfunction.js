//foreach
let arr=[1,3,4,5,6];
arr.forEach((val)=>{
    console.log(val);  
})
//map
let marks=[1,3,4,5,6];
let newarr = marks.map((val)=>{
    return val;  
});
console.log(newarr);

//filter
let score=[1,3,4,5,6];
let newscores = marks.filter((val)=>{
    return (val>5);  
});
console.log(newscores);

//reduce
let day=[1,3,44,5,6];
let days = day.reduce((previes,current)=>{
    return previes>current ? previes:current;  
});
console.log(days);

