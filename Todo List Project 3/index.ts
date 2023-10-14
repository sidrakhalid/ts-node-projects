import chalk from "chalk"
import inquirer from "inquirer"

console.log(chalk.green("Welcome to your Todo List...!!"));
let todo=["Brush teeth","Offer prayer", "Work"];
console.log("You can do following operations: ");
console.log(" 1.Add tasks, 2.Update tasks 3.Read tasks 4.Delete tasks");
let opt = await inquirer.prompt([{name:"option" , type:"number", message:" Enter Option"}]);
while (opt.option!=99){
switch(opt.option){
    case 1:
        let add= await addTask();
        console.log(add);
        todo.push(add.toString());
        console.log(todo);
        break;
    case 2:
        console.log(todo);
       let updated=await updateTask();
       let index=await inquirer.prompt([{name:"ind",type:"number",message:"Enter the index at which you want to update the Todo List."}]);
       todo.splice(index.ind,1,updated);
       console.log(todo);
       break;
    case 3:
        console.log("This is your Todo List: ")
        for(let i=0; i<todo.length;i++){
            console.log(todo[i]);
        }
        break;
    case 4:
        let index1=await inquirer.prompt([{name:"ind",type:"number",message:"Enter the index at which you want to delete the task in Todo List."}]);
        todo.splice(index1.ind,1);
        for(let i=0; i<todo.length;i++){
            console.log(todo[i]);
        }
        break;
    default: 
    console.log("Invalid option");
    }
console.log(" Again enter your option: 1.Add tasks, 2.Update tasks 3.Read tasks 4.Delete tasks 99. Quit");
opt = await inquirer.prompt([{name:"option" , type:"number", message:" Enter Option"}]);
}
async function updateTask(){
    let task = await inquirer.prompt([{name:"updated" , type:"string",
    message:"Enter updated task to update your Todo list."}]);
    return task.updated;
}
async function addTask(){
    let task = await inquirer.prompt([{name:"taskToDo" , type:"string",
message:"Enter a task to add it in your Todo list."}]);
return task.taskToDo;
}