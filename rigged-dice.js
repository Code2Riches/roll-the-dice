const prompt = require("prompt-sync")({sigint: true});

// This is Greyson's work - FYI

let rigged = Number(prompt("Enter the number you would like to rig (between 1 and 6) "));

let roll = Math.ceil(Math.random()*7); //1-7

/*
//rigged is 6
1 = 1/7
2 = 1/7
3 = 1/7
4 = 1/7
5 = 1/7
6 = 2/7

*/

console.log("Actual roll: " + roll);
if (roll ===7){
    console.log(rigged);
} else {
    console.log(roll);
}