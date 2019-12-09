/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
var rows = 10;
var columns = 10;

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function startButtonHandler() {
    console.log('in the startButtonHandler function');
}

function clearButtonHandler() {
    console.log('in the clearButtonHandler function');
}

module.exports = startButtonHandler;