function factorial(number) {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    console.log(factorial);

}
factorial(5)
