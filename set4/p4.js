let str = "meet"
let str1 = ""

function reverse(str) {
    for (let i = str.length; i >= 0; i--) {
        str1 += str.charAt(i)
    }
    console.log(str1);
}

reverse(str)