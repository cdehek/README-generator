const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateREADME');
const { setTimeout } = require('timers');


//Prompt to ask user questions about their ReadMe
const promptReadMe = readMeData => {
      console.log(`
|================================|
|  Let's create your README! :D  |
|================================|
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
              choices: [' Javascript ', ' HTML ', ' CSS ', ' ES6 ', ' jQuery ', ' Boostrap ', ' Node ']
          },
          {
              type: 'input',
              name: 'installation',
              message: 'Enter any installation instructions. (Required)',
              validate: installation => {
                  if (installation) {
                      return true;
                  } else {
                      console.log('Please enter the proper installation instructions for this project!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'usage',
              message: 'What is your app used for?(Required)',
              validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please explain what your app is used for.');
                    return false;
                }
            }
          },
          {
              type: 'input',
              name: 'contribute',
              message: 'Who contributed to this project?',
              validate: contribute => {
                  if (contribute) {
                      return true;
                  } else {
                      console.log('Please enter the names of the contributors to this project.');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'tests',
              message: 'What are the test instructions?',
              validate: tests => {
                  if (tests) {
                      return true;
                    } else {
                        console.log('Please list the apps test instructions!');
                        return false;
                    }
                }
            },
          {
              type: "checkbox",
              name: "license",
              message: "What project license (if any) did you use?",
              choices: ["MIT", "GNU LGPLv3", "mpl 2.0", "Apache License 2.0", "Boost Software License", "Unlicense", "ISC", "<none>"]
          },
          {
              type: 'input',
              name: 'contact_email',
              message: 'Please enter your contact email:',
              validate: contactEmail => {
                  if (contactEmail) {
                      return true;
                  } else {
                      console.log('Please enter your email address!');
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
        console.log('Generating file....');
        setTimeout(() => {  console.log("ReadMe created! Checkout README.md in the dist folder to see the output!"); }, 2000);
    });
});