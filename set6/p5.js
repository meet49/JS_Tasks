function name(base, exponent) {
     let factorial = 1
    for (let i = 1; i <= exponent; i++) {
        factorial *= base
    }
    return factorial
  }
  
  const result = name(8, 3);
  console.log(result); 
  