var rows = 10;
var columns = 10;

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function startButtonHandler() {
    console.log('in the startButtonHandler function');
    return 'startButton function';
}

function clearButtonHandler() {
    console.log('in the clearButtonHandler function');
    return 'clearButton function';
}

exports.startButtonHandler = startButtonHandler;
exports.clearButtonHandler = clearButtonHandler;