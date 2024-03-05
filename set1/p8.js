let rows = 8;
let columns = 5;
let table = [];

for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
        row.push(j + 1)
    }
    table.push(row)
}
console.log(table);



// function generateTable() {
//     const tbl = document.createElement("table");
//     const tblBody = document.createElement("tbody");
  
//     for (let i = 0; i < 5; i++) {
//       const row = document.createElement("tr");
  
//       for (let j = 0; j < 5; j++) {
       
//         const cell = document.createElement("td");
//         const cellText = document.createTextNode(`${j}`);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       tblBody.appendChild(row);
//     }
  
//     tbl.appendChild(tblBody);
//     document.body.appendChild(tbl);
//     tbl.setAttribute("border", "2");
//   }