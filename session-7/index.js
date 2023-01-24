// ****************************************************TASK 1****************************************************

const animals = ["dog", "cat", "mouse", "lion", "elephant"];
// const dog = animals[0];
// const cat = animals[1];
// const mouse = animals[2];
// const lion= animals[3];
// const elephant= animals[4];

animals.length;
console.log(animals);

for (let counter = 0; counter < animals.length; counter++) {
  const animal = animals[counter];
}

animals.shift;
console.log(animals);

// ****************************************************TASK 2****************************************************

// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: "shuri", age: 16 },
  { name: "killmonger", age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}

const peopleNames = people.sort(compare).map((item) => item.name);
console.log(peopleNames);
