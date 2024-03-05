let arr = [5, 4, 1, 2, 4, 32, 3, 2, 4, 43, 3, 34, 55, 6]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }

}
console.log(arr);











