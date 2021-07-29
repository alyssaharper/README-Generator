// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {

// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Github license](https://img.shields.io/github/license/${data.github}/${data.title})

  ## Description
  ${data.description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## License
This application is covered under the ${data.license} license.


## Contributors
Contributors: ${data.contributors}


## Tests
The following are tests that need to be run: ${data.tests}

## Questions
Please reach out if you have any further questions:

https://github.com/${data.github}

${data.email}
`;
}

module.exports = generateMarkdown;
