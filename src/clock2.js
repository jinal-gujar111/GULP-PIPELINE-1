document.getElementById("stopwatch").style.display = "none";
document.getElementById("stt").style.display = "none";


const timer = () => {
    let d = new Date();
    let t = d.toLocaleTimeString();
    return document.getElementById("c1").innerHTML = t;

}

function watch() {
    document.getElementById("c1").style.display = "none";
    document.getElementById("stopwatch").style.display = "block";
    document.getElementById("stt").style.display = "flex";

}