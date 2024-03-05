let start = document.getElementById("start")

start.addEventListener("click",()=>{
    let workerObj = new Worker("worker.js")
    workerObj.postMessage("start loading")
    workerObj.onmessage = function(e){
        document.querySelector("#result").innerHTML = e.data;

    }
})
let stop = document.getElementById("stop")

stop.addEventListener("click",()=>{
    document.querySelector("#hi").innerHTML += "hii!!";
})