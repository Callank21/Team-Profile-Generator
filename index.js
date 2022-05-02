const inquirer = require("inquirer");
const generateClass = require('./src/generateHTML');

const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'Please enter the name of the employee:',
    validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an employee name!');
                return false;
            }
        }
    },
    {
    type: 'input',
    name: 'id',
    message: 'Please enter the id of the employee:',
    validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an employee id!');
                return false;
            }
        }
    },
    {
    type: 'input',
    name: 'email',
    message: 'Please enter the email of the employee:',
    validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an employee email!');
                return false;
            }
        }
    },
    {
    type: 'list',
    name: 'role',
    message: 'Please enter the role of the employee:',
    choices: ['Manager', 'Engineer', 'Intern']
    }
    ];

function delegateRole(role) {
    switch (role) {
        case 'Manager':
            inquirer
                .prompt({
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Please enter the number for your office:',
                    validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter your office number!');
                                return false;
                            }
                        }
                }).then((data) => {
                    console.log(data);
                });
            break;
            case 'Engineer':
            inquirer
                .prompt({
                    type: 'input',
                    name: 'github',
                    message: 'Please enter your github username:',
                    validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter your username!');
                                return false;
                            }
                        }
                });
            break;
            case 'Intern':
            inquirer
                .prompt({
                    type: 'input',
                    name: 'school',
                    message: 'Please enter your school:',
                    validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter the school you attend!');
                                return false;
                            }
                        }
                });
            break;
    }
}

function questionPrompt() {
    const employee = inquirer.prompt(questions);
    employee.then(data => {
        generateClass(data,delegateRole(data.role));
    });
}
questionPrompt();