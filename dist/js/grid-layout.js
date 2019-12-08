/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
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
            cell.onclick = cellClickHandler;
            tableRow.appendChild(cell);
        }
        table.appendChild(tableRow);
    }
    gridContainer.appendChild(table);
}

// function to de/colour in the cell if clicked depending on whether
// its colored in already 
function cellClickHandler() {
  var rowcolumn = this.id.split("_");
  var row = rowcolumn[0];
  var column = rowcolumn[1];
  
  var classes = this.getAttribute("class");
  if(classes.indexOf("live") > -1) {
      this.setAttribute("class", "dead");
      grid[row][column] = 0;
  } else {
      this.setAttribute("class", "live");
      grid[row][column] = 1;
  }
}

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

// Start everything
window.onload = initialize;