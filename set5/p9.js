function params() {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Success ")
    },1000)
  })
}

params()

.then(result =>{
  console.log(result);
})
