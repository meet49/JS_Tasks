let arr1 = []
function numberTodigit(number) {
    let str = number.toString();
    let arr = str.split("")
    for(let i=0; i<arr.length;i++){
        let x = parseInt(arr[i])
        arr1.push(x)
    }

    console.log(arr1);
}

numberTodigit(654435)









// function numberTodigit(number) {
//     let str = number.toString();
//     let arr = str.split("").map(Number)
   
//     console.log(arr);
// }
// numberTodigit(464456)
