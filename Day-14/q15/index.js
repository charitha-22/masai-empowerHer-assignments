let seconds = prompt("Enter number of seconds:");

document.getElementById('output').textContent = "Time Left" +" "+ seconds +" " + "seconds";

const timerInterval = setInterval(()=>{
    seconds--;

    document.getElementById('output').textContent = "Time Left" +" "+ seconds +" " + "seconds";
    if(seconds <= 0){
        clearInterval(timerInterval);
        document.getElementById('output').textContent = "Countdown Completed!";
    }
}, 1000)

document.addEventListener('keypress', function(event){
    if(event.key === 's'){
        setTimeout(()=>{
            clearInterval(timerInterval);
            document.getElementById('output').textContent = "Stopped by User!";
        },1000)
    }
})