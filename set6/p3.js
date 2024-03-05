let arr1=[]
function range(a,b){
    if(a<b-1){
        arr1.push(a+1)
        range(a+1,b)
    }
    return arr1
}
console.log(range(2,9));