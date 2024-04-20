#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.bgGreen.bold("\n \tWelcome to Code with Aliya - Todo-List Application\n \t"));
let mainTask = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "view Todo-list", "Exist"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "view Todo-list") {
            await veiwTask();
        }
        else if (option.choice === "Exist") {
            conditions = false;
        }
    }
};
// function to add new task to the list
let addTask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New task:",
        }
    ]);
    todolist.push(newtask.task);
    console.log(`\n${newtask.task} task added successfully in Todo-list`);
};
// function to veiw all Todo-list tasks
let veiwTask = () => {
    console.log("\nYour Todo-List:\n");
    todolist.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
// function to delete a task from the list
let deleteTask = async () => {
    await veiwTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete"
        }
    ]);
    let deletedTask = todolist.splice(taskIndex.index, 1);
    console.log(`\n ${deletedTask}  task has been deleted sucessfully from your Todo-List\n `);
};
// function to update a task
let updateTask = async () => {
    await veiwTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task_index",
            type: "input",
            message: "Now enter new task name"
        },
    ]);
    todolist[update_task_index.index] = update_task_index.new_task_index;
    console.log(`\n Task at index no. ${update_task_index.index} update successfully [for updated list check option: "veiw Todo-list"]`);
};
mainTask();
