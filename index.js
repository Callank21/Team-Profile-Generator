const inquirer = require("inquirer");

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

function questionPrompt() {
    inquirer
        .prompt({ questions })
            .then(({ role }) => {
                return role;
            });
}
questionPrompt();