const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHtml = require("../utils/generateHtml")

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {
    managerQuestions,
    teamMenu,
    engineerQuestions,
    internQuestions
} = require("./questions");
const output = [];


addManager = () => {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers);
        buildTeam()
    })
    
}

buildTeam = () => {
    inquirer.prompt(teamMenu).then((answers) => {
        output.push(answers.menuOptions);
        if (answers.menuOptions === "Intern") {
            addIntern()
        }
        if (answers.menuOptions === "Engineer") {
            addEngineer()
        }
        if (answers.menuOptions === "No")(
            exitTeam()
        )
    })
}

addIntern = () => {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers);
        output.push(answers.menuOptions);
        buildTeam();
    })
}

addEngineer = () => {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers);
        output.push(answers.menuOptions);
        buildTeam();
    })
}

exitTeam = () => {
    console.log("Congratulations! You have finished building your team");
    // init();
}

// init = () => {
//     inquirer.prompt(questions)
//         .then((answers) => {
//             console.log(answers);
//             writeToFile('index.html', answers)
//         })
// }

// writeToFile = (fileName, answers) => {
//     const filePath = path.join(process.cwd(), fileName)
//     return fs.writeFileSync(filePath, generateHtml(answers))
// }

addManager()