function compareObjects(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  // if (keys1.length !== keys2.length) {
  //   return false;
  // }

  for (let key of keys1) {

    if (obj1[key] !== obj2[key]) {
      return false;
    }

  }
  return true;
}

const obj1 = { name: 'meet', age: 22 }
const obj2 = { age: 22, name: 'meet', college: "sal", city: "surat" }
const obj3 = { name: 'meet', age: 22 }

console.log(compareObjects(obj1, obj3))
console.log(compareObjects(obj1, obj2))

