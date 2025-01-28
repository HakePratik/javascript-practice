//write code for student gives grade for scoring in exam
let score = prompt("Enter score give in exam")
if (score>79&&score<101){
    console.log("Grade A");
}
else if (score>69&&score<80){
    console.log("Grade B");
}
else if (score>59&&score<70){
    console.log("Grade C");
}
else if (score>49&&score<60){
    console.log("Grade D");
}
else if (score>0&&score<50){
    console.log("Grade F");
}
