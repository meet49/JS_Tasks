// function fibo(num) {
//     let num1 = 0
//     let num2 = 1
//     let sum
//     console.log(num1);
//     for (let i = 0; i < num; i++) {
//         sum = num1 + num2
//         num1 = num2
//         num2 = sum
//         console.log(sum);

//     }
// }
// fibo(6)


let arr =[0,1]

function fibo(num1,num2,sum) {
   
    if(sum > 0){
        let n1 = num2
        let n2 = num1 + num2
        arr.push(n2)
        sum--
        fibo(n1,n2,sum)
    }
        
    return arr

}
console.log(fibo(0,1,6));
