let str = ""
function captcha() {
    let chareter = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq1234567890"
    for (let i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * chareter.length)
        str += " " + chareter[random]
    }

    console.log(str);

}
captcha()

