let Data = [
    {
        empId: 1,
        empName: "Meet",
        empAge: 21,
        empCity: "Surat"
    },
    {
        empId: 1,
        empName: "Meet",
        empAge: 21,
        empCity: "Surat",
        empCollege: "SALITER"
    }
]

function ArrayToCsv(Data) {
    let key = Object.keys(Data[1])
    let csvContent = [
        key.join(","), ...Data.map(row =>
            key.map(keyValue =>
                row[keyValue]))
    ]
    return csvContent.join("\n")
}


const csv = ArrayToCsv(Data);
console.log(csv);
