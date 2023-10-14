#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("Hey, Welcome to the number guessing game!! Guess the number correctly to continue playing"));
const get_userInput = async () => {
    let input = await inquirer.prompt([{
        name: "start",
        type: "number",
        message: "Enter 1 to Play and 99 to exit the game."
    }
    ]);
    return input.start;
};
let userInput = await get_userInput();
let score = 0;
let lost = 0;
let round = 0;
while (userInput != 99) {
    round++;
    console.log(chalk.bgCyan("Round " + round + " start!!"));
    let answers = await inquirer.prompt([{
        name: "user_number",
        type: "number",
        message: "Guess a number between 1-6:"
    }
    ]);
    let random = Math.floor((Math.random() * 6) + 1);
    if (answers.user_number == random) {
        console.log(chalk.green("Congratulations !! You have Guessed the correct number!"));
        score++;
    }
    else {
        console.log(chalk.red("Sorry! wrong guess!! computer's generated number was: " + random));
        lost++;
    }
    userInput = await get_userInput();
}
console.log(chalk.bgMagenta("You have completed " + round + " rounds!!"));
console.log(chalk.blueBright("Congratulations you have won " + score + " times!!"));
console.log(chalk.redBright("You have Lost " + lost + " times!!"));
