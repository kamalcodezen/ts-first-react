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
const apple = [300, 500];
console.log(apple);
const playersFootball = [
    ["Neymar", 10],
    ["Ronaldo", 7],
];
console.log(playersFootball);
function divide(a, b) {
    const price = a * b;
    const divide = a % b;
    return [price, divide];
}
const total = divide(12, 23);
console.log(total);
