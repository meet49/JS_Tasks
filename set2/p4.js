// function genArr(n) {
//     return[...Array(n).keys()]
// }
// const result =  genArr(5);
// console.log(result);


const num = 5;
const x = 0;
const array = []

function loop(n, x) {
    if (n !== x) {
        array[x] = x
        x++;
        loop(num, x)
    }

}

loop(num, x)
console.log(array);