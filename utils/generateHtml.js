generateHtml = (team) => {
    const html = `<!DOCTYPE html>
    <html lang=“en”>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class=“navbar navbar-dark bg-danger mb-8”>
            <h1 class=“navbar-brand m-4 w-100 text-center”>Team Profile</h1>
        </nav>
        <div class=“container”>
            <div class=“row”>
            ${htmlCards(team)}
            </div>
         </div>
    </body>
    </html>`;
    return html
}

htmlCards = (team) => {

    let teamData = '';
    let detail = ''

    team.forEach((teamMember) => {
        if (teamMember.getRole() === "Intern") {
            detail = `<li class=“list-group-item”><b>School: </b>${teamMember.getSchool()}</li>`
        } else if (teamMember.getRole() === "Engineer") {
            detail = `<li class=“list-group-item”><b>GitHub: </b>${teamMember.getGithub()}</li>`
        } else {
            detail = `<li class=“list-group-item”><b>Office Number: </b>${teamMember.getOfficeNumber()}</li>`
        }

        teamData += `<div class=“col-sm”>
                    <div class=“card bg-warning mx-auto my-3” style=“width: 18rem”>
                    <h5 class=“card-header text-center”><b>${teamMember.getName()}</b><br /><br/>${teamMember.getRole()}</h5>
                    <ul class=“list-group list-group-flush”>
                        <li class=“list-group-item”><b>ID: </b>${teamMember.getId()}</li>
                        <li class=“list-group-item”><b>Email Address: </b>${teamMember.getEmail()}</li>
                        ${detail}
                    </ul>
                    </div>
                </div>`
    })
    return teamData
}


module.exports = generateHtml;