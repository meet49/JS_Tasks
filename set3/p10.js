let str1 = "samurai"
let str2 = "abcd"

function MatchTwoString(str1, str2) {
    if (str2.length > str1.length) {
        return false;
    }

    let endingStr1 = str1.substring(str1.length - str2.length)
    return endingStr1 === str2
}

let result = MatchTwoString(str1, str2)
console.log(result);

