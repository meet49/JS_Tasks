let arr = []
function range(arg1, arg2) {
    if (arg1 < arg2-1) {
        arr.push(arg1 + 1)
        range(arg1 + 1, arg2)

    }
    return arr
}
console.log(range(2, 9));
