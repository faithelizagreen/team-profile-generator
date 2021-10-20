const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
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
const team = [];


addManager = () => {
    inquirer.prompt(managerQuestions).then(({
        name,
        id,
        email,
        officeNumber
    }) => {
        console.log(name, id, email, officeNumber)
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager)
        addEmployee()
    })

}


addEmployee = () => {
    inquirer.prompt(teamMenu).then(({
        menuOptions
    }) => {
        if (menuOptions === "Intern") {
            addIntern()
        }
        else if (menuOptions === "Engineer") {
            addEngineer()
        }
        else if (menuOptions === "No")(
            exitTeam()
        )
    })
}

addIntern = () => {
    inquirer.prompt(internQuestions).then(({
        name,
        id,
        email,
        school
    }) => {
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        addEmployee();
    })
}

addEngineer = () => {
    inquirer.prompt(engineerQuestions).then(({
        name,
        id,
        email,
        github
    }) => {
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
        addEmployee();
    })
}

exitTeam = () => {
    console.log("Congratulations! You have finished building your team");
    console.log(team)
    writeFile('index.html', team)
}
writeFile = (fileName, team) => {
    const filePath = path.join(process.cwd(), fileName)
    fs.writeFileSync(fileName, generateHtml(team))
}

addManager()