const prompt = require('prompt-sync')({sigint: true});

let sides = Number(prompt("Your turn to roll. How many sides do you want? "));

console.log(Math.ceil(Math.random()*sides))




