let A = [1, 5, 11, 'A', 'B', 'a', 'b', 3, 5, 7, 'z', 'd', 'b']

function remove(data) {
    return [...new Set(data)]
}

console.log(remove(A));