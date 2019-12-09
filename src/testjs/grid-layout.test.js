const grid = require('../js/grid-layout');

describe("initializing grid function", () => {
  test("should create an empty array of 10 * 10", () => {
    expect(grid.initializeGrids()).toEqual([Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]);
  });
});

describe("browser grid", () => {
  test("should display table with 10 rows and 10*10 (100) cells", () => {
    document.body.innerHTML = '<div id="gridContainer"></div>';
    grid.createTable();
    expect(document.querySelectorAll("tr").length).toEqual(10);
    expect(document.querySelectorAll("td").length).toEqual(100);
  });
});

test('changes color of cell when clicked', () => {
  // expect(grid.cellClickHandler()).toBe('');
});

test('creates 2 buttons', () => {
  // expect(grid.setupControlButtons()).toBe('');
});