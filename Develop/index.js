// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        message: 'What are the steps required to install your project?',
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
        name: 'contributors',
        message: 'Please add contributors:',
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
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./"+fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created README.md')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((data) => writeToFile("README.md", generateMarkdown(data)));
};
// Function call to initialize app
init();
