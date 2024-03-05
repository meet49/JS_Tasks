let date = new Date()
console.log(date);


const obj = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    ms: date.getMilliseconds(),
    day: date.getDay()


};

if (obj.hour > 12) {
    obj.hour -= 12
    console.log(`Current time is : ${obj.hour} PM : ${obj.minute} : ${obj.second}`);
}
else {
    console.log(`Current time is : ${obj.hour} AM : ${obj.minute} : ${obj.second}`);
}

switch (obj.day) {
    case 1:
        console.log("Today is : Monday");
        break;
    case 2:
        console.log("Today is : Tuesday");
        break;
    case 3:
        console.log("Today is : Wednesday");
        break;
    case 4:
        console.log("Today is : Thursday");
        break;
    case 5:
        console.log("Today is : Friday");
        break;
    case 6:
        console.log("Today is : Saturday");
        break;
    case 7:
        console.log("Today is : Sunday");
        break;
}
