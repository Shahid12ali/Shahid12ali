var msecCounter = 0;
var secCounter = 0;
var minCounter = 0;
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var interval;
function timer() {
    if (msec && sec && min) {
        msecCounter++;
        msec.innerHTML = msecCounter.toString().padStart(2, '0');
        if (msecCounter === 100) {
            secCounter++;
            if (secCounter === 60) {
                secCounter = 0;
                minCounter++;
                min.innerHTML = minCounter.toString().padStart(2, '0');
            }
            sec.innerHTML = secCounter.toString().padStart(2, '0');
            msecCounter = 0;
        }
    }
}
function startTimer(e) {
    // e.disabled = true;
    interval = setInterval(timer, 10);
}
function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    if (min && sec && msec) {
        min.innerHTML = "00";
        sec.innerHTML = "00";
        msec.innerHTML = "00";
    }
    secCounter = 0;
    minCounter = 0;
    msecCounter = 0;
}
