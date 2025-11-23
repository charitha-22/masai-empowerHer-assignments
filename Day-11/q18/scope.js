//a)
if (true) {
//   let x = 10;
  var y = 20;
}
console.log(y);// This will work because 'y' is declared with 'var' and has function/global scope
// console.log(x);// This will throw an error because 'x' is declared with 'let' and has block scope

//b)
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

//c)
const user = {
  name: "Sam",
  profile: {}
};

console.log(user.profile?.bio);