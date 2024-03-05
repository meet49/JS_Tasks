
let date = new Date('2021-12-22T11:07:03.123Z')
console.log(date);


function Dateobject(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        ms: date.getMilliseconds()

    };
}




console.log(Dateobject(date));