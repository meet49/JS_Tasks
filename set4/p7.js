let password = "Meet@1424";

let checkReg = /[A-Za-z0-9\@\#\$\%\&\*\!]{8,}$/
if (checkReg.test(password) == true) {
    console.log("your password is strong");
}
else {
    console.log("your password is week");
}

