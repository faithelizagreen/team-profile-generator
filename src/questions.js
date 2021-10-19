module.exports = {

    managerQuestions: [{
            type: "input",
            name: "name",
            message: "What is the manager's name?"
            // Validation
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?"
            // Validation
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
            // Validation
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
            // Validation
        },
    ],

    teamMenu: [{
            type: "list",
            name: "menuOptions",
            message: "Do you want to add more roles to your team?",
            choices: ["Intern", "Engineer",  "No"]

        }
    ],

    engineerQuestions: [{
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
            // Validation
        },
        {
            type: "input",
            name: "id",
            message: "What is the team engineer's id?"
            // Validation
        },
        {
            type: "input",
            name: "email",
            message: "What is the team engineer's email?"
            // Validation
        },
        {
            type: "input",
            name: "github",
            message: "What is the team engineer's github?"
            // Validation
        }
    ],
    
    internQuestions: [{
            type: "input",
            name: "name",
            message: "What is the intern's name?"
            // Validation
        },
        {
            type: "input",
            name: "id",
            message: "What is the team intern's id?"
            // Validation
        },
        {
            type: "input",
            name: "email",
            message: "What is the team intern's email?"
            // Validation
        },
        {
            type: "input",
            name: "school",
            message: "What is the team intern's school?"
            // Validation
        }
    ]
}