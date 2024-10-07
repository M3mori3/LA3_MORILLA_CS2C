//Iteration Mapping with Double Loops

//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

//this creates a prompt and converts the input into a number
const limit = parseInt(prompt("Enter the Maximum Limit: "));

let c = 0; //serves as the  outer counter
let k = 0; //serves as the inner counter

//double loop statement also called nested loops
for (let c = 0; c <= limit; c++) { 
    for (let k = 0; k <= limit; k++) {

        // add the value of all counters
        let addedValue = c + k; 

        //log the output of all counters and the added value of both
        console.log(`[${c}] [${k}] the added value is: ${addedValue}`);
    }
} 

