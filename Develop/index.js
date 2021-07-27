// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {return inquirer.prompt[
    {
        type: 'input',
        name: 'title',
        message: `What is your project's repository name?`,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license from the following options:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your requirements for accepting contributions?',
    },
    {
        type:'input',
        name: 'tests',
        message: 'Please write some tests for your application, then provide examples on how to run them here.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    }
]};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
