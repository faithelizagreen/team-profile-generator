const Manager = require("../lib/Manager");

test("Successfully instantiates instance of Manager class", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
})

test("Successfully set manager info using constructor arguments", () => {
    const name = "Faith"
    const id = "1"
    const email = "faithelizagreen@gmail.com"
    const officeNumber = "1234567890"
    const manager = new Manager(name, id, email, officeNumber)
    expect(manager.name).toBe(name)
    expect(manager.id).toBe(id)
    expect(manager.email).toBe(email)
    expect(manager.officeNumber).toBe(officeNumber)
})