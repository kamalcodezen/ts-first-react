"use strict";
const fullName = "Praveen";
console.log(fullName);
const age = 24;
console.log(age);
const person = "Aisha";
console.log(person);
// type checking using function
function calculate(a, b) {
    if (b === 0) {
        throw new Error("Invalid");
    }
    return a + b;
}
const result = calculate(5, 8);
console.log(result);
//basic normal array or object
const players = ["kamal", "neymar", "vini", "cunha"];
console.log(players);
const countries = {
    id: 3,
    name: "Delhi",
    goodPlace: true,
};
console.log(countries);
const workerUser = {
    id: 3,
    name: "kamal",
    goodPerson: false,
};
const employerUser = {
    id: 13,
    name: "kamal",
    perfect: true,
};
console.log(workerUser);
console.log(employerUser);
