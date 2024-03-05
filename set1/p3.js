let str = ""
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    str += "* "
  }
  console.log(str);
  str = ""
}