// ****************************************************TASK 1 - OBJECTS****************************************************

const personA = {
  name: "Alpha",
  age: 1,
  location: "Mercury",
  likes: "Dancing",
};

const personB = {
  name: "Beta",
  age: 14,
  location: "Venus",
  likes: "Laughing",
};

const personC = {
  name: "Gamma",
  age: 10,
  location: "Earth",
  likes: "Sports",
};

const personD = {
  name: "Delta",
  age: 12,
  location: "Mars",
  likes: "Reading",
};

function biography(person) {
  return `Hi, my name is ${person.name}, I live on ${person.location}, I like ${person.likes}.`;
}

console.log(biography(personC));

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);

const squared = x ** x;

console.log("squared: x ** x " + squared);

const multDiv = (x * y) / x;

console.log("multDiv: x * y / x " + multDiv);

const add = x + x + y;

console.log("add: x + x + y " + add);

// ****************************************************TASK 3****************************************************

const age = 22;
const minDriveAge = 16;

const drivingAge = age > minDriveAge;

console.log("I am old enough to drive a car. " + drivingAge);
