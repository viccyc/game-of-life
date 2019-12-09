// var startButtonHandler = require('./rules');

var rows = 10;
var columns = 10;

var grid = new Array(rows);
var nextGrid = new Array(rows);

// Initialize
function initialize() {
  console.log('in initialize');
    createTable();
    initializeGrids();
    setupControlButtons();
}

function initializeGrids() {
    for (var i = 0; i < rows; i++) {
        grid[i] = new Array(columns);
        nextGrid[i] = new Array(columns);
    }
    // return so that can test using Jest
    return grid;
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
   
    // return so that can test using Jest
    return gridContainer;
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
      console.log(grid);
      console.log(row);
      console.log(column);

      grid[row][column] = 1;
  }
}

function setupControlButtons() {
    // start button
    var startButton = document.getElementById('start');
    startButton.onclick = startButtonHandler;
    // clear button
    var clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonHandler;
}

// Start everything
window.onload = initialize;

exports.initializeGrids = initializeGrids;
exports.createTable = createTable;
exports.cellClickHandler = cellClickHandler;
exports.setupControlButtons = setupControlButtons;
