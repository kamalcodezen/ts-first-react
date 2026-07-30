const fullName: string = "Praveen";
console.log(fullName);

const age: number = 24;
console.log(age);

const person: string = "Aisha";
console.log(person);

// type checking using function
function calculate(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Invalid");
  }
  return a + b;
}

const result = calculate(5, 8);
console.log(result);

//basic normal array or object
const players: string[] = ["kamal", "neymar", "vini", "cunha"];
console.log(players);

const countries: {
  id: number;
  name: string;
  goodPlace: boolean;
} = {
  id: 3,
  name: "Delhi",
  goodPlace: true,
};

console.log(countries);

// type or interface

// Type define
type User = {
  id: number;
  name: string;
  goodPerson: boolean;
};

interface EmployerType {
  id: number;
  name: string;
  perfect: boolean;
}

const workerUser: User = {
  id: 3,
  name: "kamal",
  goodPerson: false,
};

const employerUser: EmployerType = {
  id: 13,
  name: "kamal",
  perfect: true,
};

console.log(workerUser);
console.log(employerUser);
