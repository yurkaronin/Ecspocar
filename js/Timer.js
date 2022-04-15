console.log('Timer.js inited');

const timersList = document.querySelectorAll('[data-time]');

for (let timer of timersList) {
    let count = parseInt(timer.getAttribute('data-time'), 10);
    let minutes = Math.trunc(count / 60);
    let seconds = count % 60;
    let minutesPresentation = "";
    let secondsPresentation = "";
    let timerCount; 

    function runTimer() {
        seconds--;

        if (seconds == 0) {            
            seconds = 59;
            if (minutes != 0) {
                minutes--;
            } else {
                seconds = 0;
            }
        }

        if (minutes < 10) {
            minutesPresentation = "0" + minutes;
        } else {
            minutesPresentation = minutes;
        }

        if (seconds < 10) {
            secondsPresentation = "0" + seconds;
        } else {
            secondsPresentation = seconds;
        }

        timer.innerHTML = minutesPresentation + ":" + secondsPresentation;
    
        if (minutes == 0 && seconds == 0) {
            stopTimer(timerCount);
        }
    }
    
    function stopTimer(param) {
        clearInterval(param);
    }
    
    timerCount = setInterval(runTimer, 1000);
}
