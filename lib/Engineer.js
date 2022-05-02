const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }
    getGithub() {
        return `'https://github.com/${this.github}`;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;