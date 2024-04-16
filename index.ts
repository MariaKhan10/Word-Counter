#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold.italic.underline("---- Welcome to Word Counter Application ----"));


const answers : { Sentence : string} = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : chalk.yellow.italic("Please Enter Your Sentence or Paragraph to count Words: ")
    }
]);


const words = answers.Sentence.trim().split(" ")

console.log(words);

console.log(chalk.underline.yellowBright.bold.italic(`The total Words Counted in Your Sentence are : ${words.length}`));