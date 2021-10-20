const Engineer = require("../lib/Engineer");

test("Successfully instantiates instance of Engineer class", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
})

test("Successfully set engineer info using constructor arguments", () => {
    const name = "Faith"
    const id = "1"
    const email = "faithelizagreen@gmail.com"
    const github = "faithelizagreen"
    const engineer = new Engineer(name, id, email, github)
    expect(engineer.name).toBe(name)
    expect(engineer.id).toBe(id)
    expect(engineer.email).toBe(email)
    expect(engineer.github).toBe(github)
})
