console.log("Begin"); //excecute first (1)
setTimeout(() => {
  console.log("Timeout Task");
}, 0); // this code will take the last priority because it will move from web API's to 
// Task Queue and micro task queue has first proority and then comes the task queue. 
// Hence, This statement will print at the last(4).

Promise.resolve().then(() => {
  console.log("Promise Task");
});// this code will move from web API's to 
// micro task queue has which has first prority and then comes the task queue. 
// Hence, This statement will print at 3.
console.log("End"); // this statement will print 2nd because setTimeout and 
// promise are asynchronous operations so they will be moved to web API's. 
// Hence this will be move to call stack and will print at sencond posistion.
