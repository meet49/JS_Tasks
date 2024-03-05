let arr = ['text', 3, 7, 'github', 13, 'dev']
let arr1 =[]
function RemoveString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number"){
            arr1.push(arr[i])
        }
    }
    console.log(arr1);

}

RemoveString(arr)