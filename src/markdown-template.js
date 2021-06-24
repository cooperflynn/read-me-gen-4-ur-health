function renderLicenseBadge(license) {
    if (license == 'MIT') {
return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`
    } else if (license == `GNU GPL v3`) {
return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`
    } else if (license == `Apache 2.0`) {
return `
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`
    } else if (license == `BSD 3-clause`) {
return `
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
`
    } else if (license == `BSD 2-clause`) {
return `
[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
`
    } else if (license == 'other' || !license) {
return '';
    } 
};

function renderLicenseLink(license) {
    if (license == 'MIT') {
return `
(https://opensource.org/licenses/MIT)
`
    } else if (license == `GNU GPL v3`) {
return `
(https://www.gnu.org/licenses/gpl-3.0)
`
    } else if (license == `Apache 2.0`) {
return `
(https://opensource.org/licenses/Apache-2.0)
`
    } else if (license == `BSD 3-clause`) {
return `
(https://opensource.org/licenses/BSD-3-Clause)
`
    } else if (license == `BSD 2-clause`) {
return `
(https://opensource.org/licenses/BSD-2-Clause)
`
    } else if (license == 'other' || !license) {
return '';
    } 
};

function generateMarkdown(data) {
return `
# ${data.title} 

${renderLicenseBadge(data.license)}
    
## Table of contents
* [Project description](#project-description)
* [Installation instructions](#installation-instructions)
* [Usage](#usage)
* [License](#license)
* [Contributing guidelines](#contributing-guidelines)
* [Contact](#contact)
    
##Project description
${data.description}
    
##Installation instructions
${data.installation}

##Usage
${data.usage}

##License
${data.license} 
${renderLicenseLink(data.license)}

##Contributing guidelines
${data.contribute}

##Contact  
${data.github}
${data.email}
`;   
};

module.exports = generateMarkdown;