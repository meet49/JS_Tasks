let arr = [2,3,5,8,7,9,4,8,2]
function small(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
    
            }
        }
    
    }
console.log(arr[0]);
}

small(arr)