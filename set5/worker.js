onmessage = function (e) {
    result = 0
    for (let i = 0; i < 100000000; i++) {
        result +=i
    }
    this.postMessage(result)
}