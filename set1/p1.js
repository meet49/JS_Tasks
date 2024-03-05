function convNum(num) {
    if (num < 1000) {
        return num.toString();
    }
    else if (num < 1000000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    else {
        return (num / 1000000).toFixed(1) + 'M';
    }
}


console.log(convNum(2556164));