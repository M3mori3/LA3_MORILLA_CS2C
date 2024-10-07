//if else if with conditional ternary operators

//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

//this function allows an alert that pops up right after a prompt
function alert(message) {
    console.log(message);
}

//variable that converts string inputs into floating point number
let score = parseFloat(prompt("Please enter your score: "));

// conditional ternary that assigns grades based on the criteria
let grade = score >= 97 ? " \"1.00\" Excellent " :
     score >= 94 && score <= 96 ? "\"1.25\" Excellent " :
     score >= 91 && score <= 93 ? "\"1.50\" Above Average " :
     score >= 88 && score <= 90 ? "\"1.75\" Above Average " : 
     score >= 85 && score <= 87 ? "\"2.00\" Average " :
     score >= 82 && score <= 84 ? "\"2.25\" Average " :
     score >= 79 && score <= 81 ? "\"2.50\" Below Average " :
     score >= 76 && score <= 78 ? "\"2.75\" Below Average " :
     score >= 75 ? "\"3.00\" Below Average " :
     score >= 72 && score <= 74 ? "\"4.00\" Poor " :
     "\"5.00\" Poor " ;

console.log(`Your equivalent grade is:${grade}`); //logs the equivalent grade input

let ifGrade = parseFloat(grade.split(" ")[0]); //split the value of var grade to get only the numeric values

//if else statement to input alert remarks based on the input grade of the user
if (score >= 90) {
    alert("Final Remarks: HIGH PASS, Candidate for Cum Laude");
} else if (score >= 85) {
    alert("Final Remarks: AVERAGE PASS");
} else if (score >= 75) {
    alert("Final Remarks: LOW PASS");
} else {
    alert("Final Remarks: FAILED, Need Improvement");
}
