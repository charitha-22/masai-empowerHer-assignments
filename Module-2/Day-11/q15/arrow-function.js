//a)
let userName = 'Sandhya'
let course = 'Full Stack Web Development'

console.log(`Hello ${userName}, welcome to the ${course} course`);

//b)
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

console.log(student);

//c)
getFullName = (fName, LName) => `${fName} ${LName}`;

console.log(getFullName("Charitha", "M"));