// ****************************************************TASK 1****************************************************

// Use this randomNumber inside of the while/for loops to generate a random number
const randomNumber = Math.random() * 10;

let counter = 0;

while (counter < 10) {
  console.log(randomNumber);
  counter++;
}
//while(counter < 10) {
//const randomNumber = Math.round(Math.random() * 10);
//console.log(`random number`,randomNumber)
//counter++
//}

// ****************************************************TASK 2****************************************************

let randomNumber = Math.round(Math.random() * 10);

for (i = 1; i < 10; i++) {
  console.log(`random number`, randomNumber);
}
