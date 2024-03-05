let str = "Hello_World"
let newStr = str.replace('-', ' ')
.replace('_', ' ')
.split(' ')
let newStr1
for (let i = 0; i < newStr.length; i++) {

    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substring(1) 
    newStr1 = newStr.join(" ")

}
console.log(newStr1)


