#! /usr/bin/env node

import inquirer from "inquirer";

//1) computer generate randam number
//2) user input for guessing number
//3) compare user input with computer generate number and show result

const randamnumber=Math.floor(Math.random()*7+3);
console.log(    "Welcome to number Guessing Game")
const answer=await inquirer.prompt([
    {
        name: "usernumber",
        type:"number",
        message:"please enter your guessing number betwwen 1 - 10:",
    }
]); 
if (answer.usernumber===randamnumber){
    console.log("CONGRATULATION! you guess rigth number")
}else(console.log("OOH! you guess wrong number"));