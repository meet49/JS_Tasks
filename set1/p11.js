let jsonData = [
    {
        empId: 1,
        empName: "Meet",
        empAge: 21,
        empCity: "Surat"
    },
    {
        empId: 2,
        empName: "Hemil",
        empAge: 22,
        empCity: "Surat"

    },
    {
        empId: 3,
        empName: "D.V.",
        empAge: 22,
        empCity: "Surat"

    },
    {
        empId: 4,
        empName: "Keval",
        empAge: 21,
        empCity: "Ahmedabad"

    }
]

function JsonToCsv(jsonData) {
    let key = Object.keys(jsonData[0])
    let csvContent = [
        key.join(","), ...jsonData.map(row =>
            key.map(keyValue =>
                row[keyValue]))
    ]
    return csvContent.join("\n")
}


const csv = JsonToCsv(jsonData);
console.log(csv);


function CsvToJson(csvData){
    let row = csvData.split("\n");
    let key = row[0].split(",")
    let arr = []

    for(let i=1; i<row.length; i++){
        let currentRow = row[i].split(",")
        if(currentRow.length == key.length){
            const obj ={};
            for(let j= 0;j<key.length;j++){
                obj[key[j]] = currentRow[j]
            }
            arr.push(obj)
        }
    }
    return arr
}   

const csvData = csv
const json = CsvToJson(csvData)
console.log(json);