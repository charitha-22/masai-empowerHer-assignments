//a)
arr1 = [1, 2, 3];
arr2 = [4, 5];

let result = [...arr1, ...arr2];
console.log(result);

//b)
function sum(...nums){
    return nums.reduce((acc,i)=> acc+i,0);
}

console.log(sum(1,2,3,4,5));

//c)
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

let {name, address:{city, pin}} = user;

console.log(`name: ${name}, city: ${city}, pin: ${pin}`);