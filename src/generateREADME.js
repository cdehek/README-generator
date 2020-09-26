function generateMarkdown(readMeData) {
    return `
  # ${readMeData.title}
  <img src="https://img.shields.io/badge/${readMeData.label}-${readMeData.message}-${readMeData.color}" alt="${readMeData.label}" />
  ## ${readMeData.description}
  ---
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Languages Used](#languages)
  - [Questions](#questions)
  - [License](#license)
  ---
  ## Installation
  ​
  ${readMeData.installation}
  ---
  ## Usage
  ${readMeData.usage}
  ---
  ## Contribute
  ${readMeData.contribute}
  ---
  ## Tests
  ${readMeData.tests}
  ---
  ## License
  This projet is licensed under the terms of ${readMeData.license} license.
  ---
  ## Questions
  If you have any questions about this repo,
  open an issue or contact ${readMeData.contact_email}
  `;
  }
  
  module.exports = generateMarkdown;