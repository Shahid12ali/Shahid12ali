let msecCounter: number = 0;
let secCounter: number = 0;
let minCounter: number = 0;

let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec");
let interval: NodeJS.Timeout;

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

function startTimer(e: HTMLButtonElement) {
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
