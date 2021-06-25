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

function renderLicenseTOC(license) {
    if (!license) {
        return '';
    } else {
        return `
        * [License](#license)
        `
    }
};

function renderLicenseNotice(license) {
    if (!license) {
        return '';
    } else {
        return `
        &copy; ${new Date().getFullYear()}
  
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.   
        `
    }
};

function renderLicenseSection(license) {
    if (!license) {
        return '';
    } else {
        return `
        ##License
        ${license}
        ${renderLicenseLink(license)}
        ${renderLicenseNotice(license)}
        `
    }
};

function renderDescriptionTOC(description) {
    if (!description) {
        return '';
    } else {
        return `
        * [Description](#description)
        `
    }
};

function renderDescriptionSection(description) {
    if (!description) {
        return '';
    } else {
        return `
        ##Description
        ${description}
        `
    }
};

function renderInstallationTOC(installation) {
    if (!installation) {
        return '';
    } else {
        return `
        * [Installation](#installation)
        `
    }
};

function renderInstallationSection(installation) {
    if (!installation) {
        return '';
    } else {
        return `
        ##Installation
        ${installation}
        `
    }
};

function renderUsageTOC(usage) {
    if (!usage) {
        return '';
    } else {
        return `
        * [Usage](#usage)
        `
    }
};

function renderUsageSection(usage) {
    if (!usage) {
        return '';
    } else {
        return `
        ##Usage
        ${usage}
        `
    }
};

function renderContributeTOC(contribute) {
    if (!contribute) {
        return '';
    } else {
        return `
        * [Contribute](#contribute)
        `
    }
};

function renderContributeSection(contribute) {
    if (!contribute) {
        return '';
    } else {
        return `
        ##Contribute
        ${contribute}
        `
    }
};

function renderTestTOC(test) {
    if (!test) {
        return '';
    } else {
        return `
        * [Test](#test)
        `
    }
};

function renderTestSection(test) {
    if (!test) {
        return '';
    } else {
        return `
        ##Test
        ${test}
        `
    }
};


function generateMarkdown(data) {
return `
# ${data.title} 

${renderLicenseBadge(data.license)}
    
## Table of contents
${renderDescriptionTOC(data.description)}
${renderInstallationTOC(data.installation)}
${renderUsageTOC(data.usage)}
${renderLicenseTOC(data.license)}
${renderContributeTOC(data.contribute)}
${renderTestTOC(data.test)}
* [Contact](#contact)
    
${renderDescriptionSection(data.description)}
    
${renderInstallationSection(data.installation)}

${renderUsageSection(data.usage)}

${renderLicenseSection(data.license)}

${renderContributeSection(data.contribute)}

${renderTestSection(data.test)}

##Contact  
* Github: [www.github.com/${data.github}](www.github.com/${data.github})
* Email: ${data.email}
`;   
};

module.exports = generateMarkdown;