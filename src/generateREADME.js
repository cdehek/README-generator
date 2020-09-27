function generateMarkdown(readMeData) {
    return `
  # ${readMeData.title}
  # Created By: ${readMeData.username}
  <img src="https://img.shields.io/badge/license-${readMeData.license}-green" alt="license" />

  ### ${readMeData.description}

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
  ### ${readMeData.installation}
  ---
  ## Usage
  ### ${readMeData.usage}
  ---
  ## Contributors
  ### ${readMeData.contribute}
  ---
  ## Tests
  ### ${readMeData.tests}
  ---
  ## Languages
  ### ${readMeData.languages}

  ---
  ## License
  This project is licensed under the terms of ${readMeData.license} license.
  ---
  ## Questions
  If you have any questions about this repo,
  open an issue or contact ${readMeData.contact_email}
  `;
}
  
  module.exports = generateMarkdown;