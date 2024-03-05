let url = "https://www.google.com";

let checkReg = /(https|http):\/\/(www\.)[a-zA-Z0-9\$\#].[a-z]/
if (checkReg.test(url) == true) {
    console.log("Valid URL");
}
else {
    console.log("InValid URL");
}


