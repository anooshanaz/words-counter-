import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: chalk.blueBright("Enter your sentence to count the words")
    }]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellowBright(`your sentence words count is ${words.length}`));
