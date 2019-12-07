var rows = 10;
var columns = 10;

// Initialize
function initialize() {
  console.log('in initialize');
    createTable();
}

// Lay out the board in the form of a table
function createTable() {

    var gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        // Throw error
        console.error("Error - no containter div");
    }
    var table = document.createElement("table");
    
    for (var i = 0; i < rows; i++) {
        var tableRow = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            // cell.onclick = cellClickHandler;
            tableRow.appendChild(cell);
        }
        table.appendChild(tableRow);
    }
    gridContainer.appendChild(table);
  console.log(gridContainer);

}

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

// Start everything
window.onload = initialize;