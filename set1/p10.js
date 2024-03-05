let arr = [1, "Meet", 21]
let arr1 = [2, "Hemil", 22]

function Data() {
    let displayData = document.getElementById("data");
    displayData.innerHTML = `<p><h6>Rollno: ${arr[0]}</h6></p>
    <p><h6>Name: ${arr[1]}</h6></p>
    <p><h6>Age: ${arr[2]}</h6></p>`
}

function chnageData() {
    let displayData1 = document.getElementById("data");
    displayData1.innerHTML = `<p><h6>Rollno: ${arr1[0]}</h6></p>
    <p><h6>Name: ${arr1[1]}</h6></p>
    <p><h6>Age: ${arr1[2]}</h6></p>`
    chnageData()
}

Data()



// let el = document.createElement("button")
// body.append(el)


// // function chnageData(data) {
// //     data.splice(0,3,arr1)
// // }
// arr.splice(0,3,arr1[2])
// console.log(arr);
