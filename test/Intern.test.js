const Intern = require("../lib/Intern");

test("Successfully instantiates instance of Engineer class", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
})

test("Successfully set intern info using constructor arguments", () => {
    const name = "Faith"
    const id = "1"
    const email = "faithelizagreen@gmail.com"
    const school = "UCF"
    const intern = new Intern(name, id, email, school)
    expect(intern.name).toBe(name)
    expect(intern.id).toBe(id)
    expect(intern.email).toBe(email)
    expect(intern.school).toBe(school)
})