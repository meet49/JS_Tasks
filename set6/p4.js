let array = [1, 2, 3, 4, 5, 6]
// function sum(arr){
//     let s = 0 
//     for (let i = 0; i < arr.length; i++) {
//         s += arr[i]
//     }
//     return s
// }
// console.log(sum(array));
let i=0
let sum = 0           

function sumOfArray(arr) {

    if(i<arr.length){
        sum += arr[i]
        i++
        sumOfArray(arr)
    }
    return sum
}
console.log(sumOfArray(array));
