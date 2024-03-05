let stopwatch = document.getElementById("stopwatch")
let startButton = document.getElementById("start")
var stopTime = document.getElementById("stoptime")

let timeOut = null
let mili = 0
let sec = 0
let min = 0

function start() {
    // if (flag) {
        startButton.disabled = true
    // }

    timeOut = setTimeout(function () {
        mili = parseInt(mili)
        sec = parseInt(sec)
        min = parseInt(min)

        mili++;

        if (mili == 100) {
            sec = sec + 1
            mili = 0;
        }
        if (sec == 60) {
            min = min + 1
            sec = 0
        }
        if (mili < 10) {
            mili = '0' + mili
        }
        if (sec < 10) {
            sec = '0' + sec
        }
        if (min < 10) {
            min = '0' + min
        }

        stopwatch.innerHTML = min + ':' + sec + ':' + mili;

        start();

    }, 10);
}
let n = 0
function stop() {
    clearTimeout(timeOut);
    startButton.disabled = false;
    n++
    let storeTime = min + ':' + sec + ':' + mili

    if (storeTime == "0:0:0") {
        storeTime = " (" + n + ") " + "00" + ':' + "00" + ':' + "00"

    }
    else {
        storeTime = " (" + n + ") " + min + ':' + sec + ':' + mili;
    }
    let p = document.createElement("p")
    stopTime.append(p)
    p.append(storeTime)


}

function reset() {
    mili = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeOut);
    stopwatch.innerHTML = '00:00:00';
    stopTime.innerHTML = ""
    startButton.disabled = false;
    n = 0
}