let csvData = `1,meet,Sojitra
2,meet,sojitra
3,meet,sojitra`

function CsvToArray(csvData) {
    let row = csvData.split("\n");
    let arr = []

    for (let i = 0; i < row.length; i++) {
        let currentRow = row[i].split(",")
        arr.push(currentRow)
    }
    return arr
}

const json = CsvToArray(csvData)
console.log(json);