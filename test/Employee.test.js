const Employee = require("../lib/Employee");

test("Successfully instantiates instance of Employee class", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test("Successfully set name using constructor arguments", () => {
    const name = "Faith"
    const id = "1"
    const email = "faithelizagreen@gmail.com"
    const employee = new Employee(name, id, email)
    expect(employee.name).toBe(name)
    expect(employee.id).toBe(id)
    expect(employee.email).toBe(email)
})
