var fruites = ["apple", "banana", "orange", "grapes", "watermelon", "pineapple"]
const fruite = [...fruites]

for (const i of fruites) {
  if (i == "grapes") {
    console.log(fruites.indexOf(i));
  }
}

fruites.shift()
console.log(fruites);

fruite.splice(1, 0, "kiwi")
console.log(fruite);

fruite.splice(4, 2)
console.log(fruite);

fruites.unshift("apple")
console.log(fruites);