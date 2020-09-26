const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateREADME');


//Prompt to ask user questions about their ReadMe
const promptReadMe = readMeData => {
    // if (!readMeData.projects) {
    //   readMeData.projects = [];
    // }
      console.log(`
  ===============
  Add a New Project README.md
  ===============
      `);
      return inquirer.prompt([
          {
              type: 'input',
              name: 'username',
              message: 'What is your GitHub username?(Required)',
              validate: usernameInput => {
                  if (usernameInput) {
                      return true
                  } else {
                      console.log('Please enter your GitHub username!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'title',
              message: 'What is the name of your project?(Required)',
              validate: nameInput => {
                  if (nameInput) {
                      return true;
                  } else {
                      console.log('Please enter your projects name!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'description',
              message: 'Provide a description of the project (Required)',
              validate: descInput => {
                  if (descInput) {
                      return true;
                  } else {
                      console.log('Please enter a description of your project!');
                      return false;
                  }
              }
          },
          {
              type: 'checkbox',
              name: 'languages',
              message: 'What did you build this project with? (Check all that apply)',
              choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Boostrap', 'Node']
          },
          {
              type: 'input',
              name: 'instructions',
              message: 'Enter any installation instructions. (Required)',
              validate: instrucInput => {
                  if (instrucInput) {
                      return true;
                  } else {
                      console.log('Please enter the proper installation instructions for this project!');
                      return false;
                  }
              }
          }
      ])
  };

promptReadMe()
.then(readMeData => {
    const readMe = generateMarkdown(readMeData);

    fs.writeFile('./dist/README.md', readMe, err => {
        if (err) throw err;

        console.log('ReadMe created! Checkout README.md to see the output!')
    });
});