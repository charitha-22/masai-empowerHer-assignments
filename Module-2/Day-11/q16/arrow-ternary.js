const isEvent = (num)=> num % 2 === 0 ? true : false;

console.log(isEvent(4)); // true
console.log(isEvent(7)); // false

const result = (marks) => marks >= 35 ? "Pass" : "Fail";

console.log(result(50)); // Pass
console.log(result(20)); // Fail

const greet = (name) => name ? `Hello, ${name}!` : "Hello, Guest!";

console.log(greet("charitha")); // Hello, charitha!
console.log(greet(""));      // Hello, Guest!