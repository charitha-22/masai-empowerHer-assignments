//Template Literals + Expressions
//1.
console.log(`The sum is: ${5+7}`);
//2.
console.log(`The sum is: ${5+7}
    hello world
    welcome to javascript`);
//3.
let firstName = "John"
let lastName = "Doe"
console.log(`Full Name: ${firstName} ${lastName}`);

 //Arrow Functions & this
 //a)
 let square = (n) => n*n;
    console.log(square(6));

//b)
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
// obj.test(); //This will log 'undefined' because arrow functions do not have their own 'this'

//c) 
const object = {
    value: 50,
    test(){
        console.log(this.value);
    }
}
object.test();

//Rest, Spread & Copying Objects
//a)
const product = { name: "Pen", price: 10 };
const sampleProduct = {...product};
console.log(sampleProduct);

//b)
const a = { x: 1 };
const b = { y: 2 };
const c = {...a, ...b};
console.log(c);

//c)
 function maxValue(...nums){
    return Math.max(...nums);
 }

console.log(maxValue(3,5,1,8,2));

//Destructuring & Optional Chaining
//a)
const arr = [10, 20, 30];
const [first, second] = arr;
console.log(`first: ${first}, second: ${second}`);

//b)
const laptop = { brand: "Dell", ram: "8GB" };
const {brand} = laptop;
console.log(`brand: ${brand}`);

//c)
const info = {};
console.log(info?.details);

// Scoping (let/var/const)
//a)
// for (var i = 0; i < 3; i++) {}
// console.log(i);
//This will log 3 because 'i' is declared with 'var' and has function/global scope

//b)
// for (let j = 0; j < 3; j++) {}
// console.log(j);
//This will throw an error because 'j' is declared with 'let' and has block scope

//c)
//Why is const used for values that should not be reassigned?
//Const is used to declare variables that should not be reassigned to a different value. 
// It helps to prevents accidental reassignment, 
// ensuring that the variable always holds the same reference throughout its scope.

//Ternary Operator – Practice
//a)
// let speed;
// if (kmph > 60) {
//   speed = "Fast";
// } else {
//   speed = "Normal";
// }
let kmph =60
let speed = (kmph > 60)? "Fast" : "Normal";
console.log(speed);

//b)
let age = 20;
(age >= 18)? console.log("Adult") : console.log("Minor");

//c)
const num = 5;

const result = num > 0 
  ? "Positive" 
  : num === 0 
    ? "Zero" 
    : "Negative";

console.log(result);

//Spread, Rest & Arrays
//a)
const nums = [1,2,3];
const resultArr = [...nums,4,5];
console.log(resultArr);

//b)
let a_data = ["x","y"];
let b_data = ["z"];
const combined = [...a_data,...b_data];
console.log(combined);

//c)
function printNames(...names){
    let data = []
    data.push(...names);
    console.log(data);
}
printNames("A","B","C");

// Object Destructuring & Shorthand
//a)
const user = { id: 101, status: "active" };
const {id, status} = user;
console.log(`id: ${id}, status: ${status}`);

//b)
const id1 = 101;
const role = "admin";
const user1 = {
  id1,
  role
};

//c)
const name = "Sam";
const age1 = 22;

const student = {
  name,
  age1,      
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

student.greet();

//Template Literals (More Practice)
//a)
const today = new Date().toDateString();

console.log(`Today's date is: ${today}`);

//b)
const name2 = "Sam";
const score = 85;

console.log(`Hello ${name2}, your score is ${score}/100`);

//Arrow Function Shorthands
//a)
const add = (a, b) => a + b;
console.log(add(4, 5));

//b)
const isAdult = (age) => age >= 18;
console.log(isAdult(20));

//c)
const double = (num) => num * 2;
console.log(double(7));

//Spread Operator (Arrays & Objects)
//a)
const nums1 = [1, 2, 3];
const copy = [...nums1];

console.log(copy);

//b)
const numbers = [10, 20, 30];
const updated = [100, ...numbers];

console.log(updated);

//c)
const obj1 = { name: "Sam", age: 20 };
const obj2 = { age: 25, city: "Delhi" };

const merged = { ...obj1, ...obj2 };

console.log(merged);

//Optional Chaining (More Practice)
//a)
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user3?.address?.city);
//b)
console.log(user3?.job?.title);
//c)
const product1 = {
  name: "Laptop",
  specs: {}
};
console.log(product1.specs?.processor);