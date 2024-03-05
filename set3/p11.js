let str = "exercise"
let str1 = ''
function RepeatString(str) {
    for(let i=0;i<str.length;i++){
        str1 += str[i]+str[i]
    }
    console.log(str1);
}
RepeatString(str)