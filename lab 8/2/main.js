function UpdateTime(durationFunc){
    var hours = parseInt(durationFunc / 3600, 10);
    var minutes = parseInt(durationFunc / 60, 10);
    var seconds = parseInt(durationFunc % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    elementTimer.textContent = ` ${hours}:${minutes}:${seconds}.`;

    duration = durationFunc
}

function Timer(duration) {
    clearInterval(timer);
    stopStart = true;
    elementTimer.classList.remove('blink');
    timer = setInterval(function() {
        UpdateTime(duration);
        duration--;
    }, 1000);
}
function startTimer(){
    if(!stopStart)
        Timer(duration);
}
function stopTimer(){
    stopStart = false;
    clearInterval(timer);
    timer = setInterval(function(){
        elementTimer.classList.toggle('blink');
    }, 500);
}
function resetTimer(){
    duration = 3600;
    Timer(duration);
}
let stopStart = true;
let elementTimer = document.querySelector('#timer');
let timer;
let duration = 3600;

Timer(duration);