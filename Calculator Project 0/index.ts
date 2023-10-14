import inquirer from "inquirer";
import chalk from "chalk";

function sum(a:number, b:number){
    return a+b;
}
function sub(a:number, b:number){
    return a-b;
}
function mul(a:number, b:number){
    return a*b;
}
function div(a:number, b:number){
    return a/b;
}
console.log(chalk.red("Enter two numbers to perform a mathematical function:"));
let x = await inquirer.prompt({name: "x" ,type:"number", message: "Enter 1st number"});
let y = await inquirer.prompt({name: "y" ,type:"number", message: "Enter 2nd number"});
console.log(chalk.yellow("Which function do you want to perform on your numbers: 1. Sum 2.Sub 3.Mul 4.Div and enter 99 to exit"));
let option=await inquirer.prompt({name:"option",type:"number" ,message:"Enter your Option"});
while(option.option!=99){

switch(option.option)
{
    case 1:
       let ans= sum(x.x,y.y);
       console.log(chalk.blue("Result of addition is = "+ans));
        break;

        case 2:
            let subt= sub(x.x, y.y);
            console.log(chalk.greenBright("Result of subtraction is = "+subt));
            break;
        case 3:
           let mult= mul(x.x, y.y);
           console.log(chalk.bgCyan("Result of multiplication is = "+mult));
           break;
        case 4:
           let divd= div(x.x,y.y);
            console.log(chalk.bgYellowBright("Result of division is = "+divd));
            break;
        }
        console.log(chalk.yellow("Which function do you want to perform on your numbers: 1. Sum 2.Sub 3.Mul 4.Div and enter 99 to exit"));
option=await inquirer.prompt({name:"option",type:"number" ,message:"Enter your Option"});
    }