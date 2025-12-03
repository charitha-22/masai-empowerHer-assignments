
function displayMessage(name){
    console.log("Hello"+" "+name);
}

function getUserInput(Callback){
    setTimeout(()=>{
        let userName = "Alice";
        Callback(userName);
    },1000)
}

getUserInput(displayMessage);