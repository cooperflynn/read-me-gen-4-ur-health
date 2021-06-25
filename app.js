const inquirer = require('inquirer');
const writeFile = require('./utils/generate-readme.js');
const generateMarkdown = require('./src/markdown-template.js');

const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username: (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('You must provide your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address: (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must provide your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You must provide a title!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to provide a description of your project?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.',
            when: ({confirmDescription}) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }  
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to provide installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions for your project.',
            when: ({confirmInstallation}) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }  
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to provide usage instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information for your project.',
            when: ({confirmUsage}) => {
                if (confirmUsage) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license to this project?',
            default: true
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license you are using for your project:',
            choices: ["MIT", "GNU GPL v3", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "Other"],
            when: ({confirmLicense}) => {
                if (confirmLicense) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Can other developers contribute to this project?',
            default: true
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter the contributing guidelines for your project.',
            when: ({confirmContribute}) => {
                if (confirmContribute) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to provide test instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions.',
            when: ({confirmTest}) => {
                if (confirmTest) {
                    return true
                } else {
                    return false
                }
            }
        },
    ])
};

prompt()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(markDown => {
        return writeFile(markDown)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
    
