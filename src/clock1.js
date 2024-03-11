// document.getElementById("c1").style.display = "none";
// document.getElementById("stopwatch").style.display = "none";
// document.getElementById("stt").style.display = "none";


// const timer = () => {
//     let d = new Date();
//     let t = d.toLocaleTimeString();
//     return document.getElementById("c1").innerHTML = t;

// }

// function watch() {
//     document.getElementById("c1").style.display = "none";
//     document.getElementById("stopwatch").style.display = "block";
//     document.getElementById("stt").style.display = "flex";

// }

function fu2() {

    document.getElementById("c1").style.display = "block";
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("stt").style.display = "none";
    setInterval(timer, 1000);
}

let mili = '00';
let sec = '00';
let min = '00';
let m = document.getElementById("mili_sec");
let s = document.getElementById("sec");
let minu = document.getElementById("minute");
var interval;

function complete() {
    mili++;
    if (mili <= 9) {
        m.innerHTML = "0" + mili;
    }
    if (mili > 9) {
        m.innerHTML = mili;
    }
    if (mili > 99) {
        sec++;
        s.innerHTML = "0" + sec;
        mili = 0;
        m.innerHTML = "0" + 0;

    }
    if (sec > 9) {
        s.innerHTML = sec;
    }
    if (sec > 59) {
        min++;
        minu.innerHTML = "0" + min;
        sec = 0;
        s.innerHTML = "0" + 0;
    }
    if (min > 9) {
        minu.innerHTML = min;
    }


}

function start() {
    interval = setInterval(complete, 10);
    return interval;

}

function stop() {
    clearInterval(interval);
}

function reset() {
    m.innerHTML = "0" + 0;
    s.innerHTML = "0" + 0;
    minu.innerHTML = "0" + 0;
}