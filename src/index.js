const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
// const generateHtml = require("../utils/generateHtml")

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {
    managerQuestions,
    teamMenu,
    engineerQuestions,
    internQuestions
} = require("./questions");
const team = [];


addManager = () => {
    inquirer.prompt(managerQuestions).then(({name, id, email, officeNumber}) => {
        console.log(name, id, email, officeNumber)
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager)
        buildTeam()
    })
    
}

buildTeam = () => {
    inquirer.prompt(teamMenu).then(({menuOptions}) => {
        if (menuOptions === "Intern") {
            addIntern()
        }
        if (menuOptions === "Engineer") {
            addEngineer()
        }
        if (menuOptions === "No")(
            exitTeam()
        )
    })
}

addIntern = () => {
    inquirer.prompt(internQuestions).then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        buildTeam();
    })
}

addEngineer = () => {
    inquirer.prompt(engineerQuestions).then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
        buildTeam();
    })
}

exitTeam = () => {
    console.log("Congratulations! You have finished building your team");
    console.log(team)
    // writeToFile
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