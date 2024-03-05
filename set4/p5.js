const obj = {
    Name: "meet"
}
// let arr =[]

function check(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("object is empty");
    }
    else {
        console.log("object is Not empty");
    }
}
check(obj)





// for (const key in obj) {
//     arr.push(key)
// }
// console.log(arr);