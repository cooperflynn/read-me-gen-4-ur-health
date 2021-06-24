const inquirer = require('inquirer');
const writeFile = require('./utils/generate-readme.js');
const generateMarkdown = require('./src/markdown-template.js');

const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!')
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions for your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions for your project!')
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information for your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('Please enter the usage information for your project!')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license you are using for your project:',
            choices: ["MIT", "GNU GPL v3", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "Other"],
            validate: licenseChoice => {
                if (licenseChoice) {
                    return true
                } else {
                    console.log('Please select the license you are using for your project!')
                    return false
                }
            }

        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter the contributing guidelines for your project.',
            validate: contributeInput => {
                if (contributeInput) {
                    return true
                } else {
                    console.log('Please enter the contributing guidelines for your project!')
                    return false
                }
            }
        }
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
    
