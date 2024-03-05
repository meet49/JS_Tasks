
const data = {
  name: "Meet",
  age: 21,
  address: {
    street: "Suvidha Ro house",
    city: "Surat",
    state: "Gujarat"
  }
};

const name = data.name
const street = data.address.street
console.log(`My name is ${name} , Street address is ${street}`)

const firstName = data["name"]
const state = data["address"]["state"]
console.log(`My name is ${firstName} , My state is ${state}`)