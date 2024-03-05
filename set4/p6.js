let email = "meetsojitra@gmail.in";

let checkReg = /^[^A-Z][a-z0-9._]+@[a-z]+\.[a-z]{2,}$/
if (checkReg.test(email) == true) {
    console.log("Valid email");
}
else {
    console.log("InValid email");
}
