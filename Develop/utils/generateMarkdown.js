
function renderLicenseBadge(data) {
  if(data.license === "MIT") {
    return ("![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)");
  } else if (data.license === "Apache") {
    return ("![Github license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)");
  } else if (data.license === "GPL") {
    return ("![Github license](https://img.shields.io/badge/License-GPLv3-blue.svg)");
  } else {
    return ("![Github license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data)}

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
