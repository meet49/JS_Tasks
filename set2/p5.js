const obj = {
    name: "John",
    age: 24,
    education: "Engineering in IT",
    institute: "SCET",
    passing_year: 2021
}

let arr1 = Object.keys(obj).map(
    key => `${key} = ${obj[key]}`
);
console.log(arr1);



let arr = []

for (const i in obj) {
    arr.push(i + " = " + obj[i])
}
console.log(arr);


function objcall(data) {
    return `Hello, My name is <${data.name}> I'm <${data.age}> years old. I've completed <${data.education}> from <${data.institute}> in year <${data.passing_year}>.`
}

const result = objcall(obj)
console.log(result);

