let arr = [2,3,5,8,7,9,4,8,2]
let arr1 =[]
function AcceptArr(arr) {
    let small = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (small > arr[i+1]) {
            small = arr[i+1]
        }
    }
    arr1.push(small);

    let large = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (large < arr[i+1]) {
            large = arr[i+1]
        }
    }
    arr1.push(large);
    arr1.push(arr.length)

    let sum = 0;
    let avg
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        avg = sum / arr.length
    }
    arr1.push(+avg.toFixed(2));

}
AcceptArr(arr)
console.log(arr1);