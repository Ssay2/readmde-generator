const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./generateREADME');

const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'loop?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'my project is a web application that allows you create share notes:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'http://localhost3000:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'MIT:',
        choices: ['MIT']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'npm test:'
    },
    {
        type: 'input',
        name: 'saydou',
        message: 'Ssay2:'
    },
    {
        type: 'input',
        name: 'saydoumamadousy@gmail.com',
        message: 'saydoumamadousy@gmail.com:'
    }
];

   

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated successfully!')
    );
}


function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            writeToFile('README.md', readmeContent);
        });
}


init();
