function createCounter(){
    let count = 0;

    function increment(){
        console.log(count++);
    }

    function decrement(){
        console.log(count--);
    }

    return {increment, decrement};
}
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

//parent function will have inner/child functions which will be able to access
//the data(variables) from outer function even after the execution of outer function is completed.
//this helps to keep the data private.

const counter1 = createCounter();
counter1.increment(); 
counter1.increment(); 
counter1.decrement();

//each counter creates new closure with it's own count.

function createBankAccount(){
    let balance = 0;
    let transactionHistory = []
    function deposit(dAmount){
        balance += dAmount;
        transactionHistory.push(`Deposited ${dAmount}`);
    }
    function withdraw(wAmount){
        if(wAmount < balance){
            balance -= wAmount;
            transactionHistory.push(`Withdrawn ${wAmount}`);
        }else{
            console.log("insufficient balance");
            transactionHistory.push(`Failed Withdrawal ${wAmount}`);
        }
    }
    function getBalance() {
      return balance;
    }
    function getHistory() {
      return transactionHistory;
    }
    return {deposit,withdraw,getBalance,getHistory}
}

const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined
console.log(account.getHistory());