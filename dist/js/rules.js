/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
var rows = 10;
var columns = 10;

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function startButtonHandler() {
    console.log('startButtonHandler');
    computeNextGen();
}

function clearButtonHandler() {
    console.log('clearButtonHandler');
}

function computeNextGen() {
  for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
          applyRules(i, j);
      }
  }
  
  // copy NextGrid to grid, and reset nextGrid
  // copyAndResetGrid();
  // copy all 1 values to "live" in the table
  // updateView();
}

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function applyRules(row, col) {
  // var numNeighbors = countNeighbors(row, col);
  // if (grid[row][col] == 1) {
  //     if (numNeighbors < 2) {
  //         nextGrid[row][col] = 0;
  //     } else if (numNeighbors == 2 || numNeighbors == 3) {
  //         nextGrid[row][col] = 1;
  //     } else if (numNeighbors > 3) {
  //         nextGrid[row][col] = 0;
  //     }
  // } else if (grid[row][col] == 0) {
  //     if (numNeighbors == 3) {
  //         nextGrid[row][col] = 1;
  //     }
  // }
  console.log('rules!');
}
  
function countNeighbors(row, col) {
  var count = 0;
  if (row-1 >= 0) {
      if (grid[row-1][col] == 1) count++;
  }
  if (row-1 >= 0 && col-1 >= 0) {
      if (grid[row-1][col-1] == 1) count++;
  }
  if (row-1 >= 0 && col+1 < cols) {
      if (grid[row-1][col+1] == 1) count++;
  }
  if (col-1 >= 0) {
      if (grid[row][col-1] == 1) count++;
  }
  if (col+1 < cols) {
      if (grid[row][col+1] == 1) count++;
  }
  if (row+1 < rows) {
      if (grid[row+1][col] == 1) count++;
  }
  if (row+1 < rows && col-1 >= 0) {
      if (grid[row+1][col-1] == 1) count++;
  }
  if (row+1 < rows && col+1 < cols) {
      if (grid[row+1][col+1] == 1) count++;
  }
  return count;
}

