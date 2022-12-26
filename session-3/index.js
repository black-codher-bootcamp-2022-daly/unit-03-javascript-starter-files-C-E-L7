// This is a comment in JavaScript

let a = 5;
let b = 10;
let c = a + b;
//line left blank for readability
console.log(c); //Expected output = 15

a = 20;

console.log(c); //Expected output = 30 but its still 15. The next codes will make c to = 30
c = a + b;
console.log(c);
//Now the output value of C is 30
// You can see where this file is connected to your HTML in the index.html on line 14
