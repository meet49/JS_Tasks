function gcd(num1, num2) {
    if (num2 === 0) {
        return num1;
    }
    //   else if(num1 === 0){
    //     return num2;
    //   }
    else {
        return gcd(num2, num1 % num2)
    }
}

console.log(gcd(40, 30));
