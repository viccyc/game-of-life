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

describe("event handler for clicking on grid cell", () => {
  test("changes color (dead/live) of cell when clicked", () => {
    // document.body.innerHTML = '<div id="gridContainer"></div>';
    // grid.createTable();
    // grid.cellClickHandler();
    // expect(document.querySelectorAll(".dead").length).toEqual(1);
    // expect(document.querySelectorAll(".live").length).toEqual(0);
    // document.querySelector(".dead").click();
    // expect(document.querySelectorAll(".dead").length).toEqual(0);
    // expect(document.querySelectorAll(".live").length).toEqual(1);
    // document.querySelector(".live").click();
    // expect(document.querySelectorAll(".dead").length).toEqual(1);
    // expect(document.querySelectorAll(".live").length).toEqual(0);
  });
});

test('creates 2 buttons', () => {
  // expect(grid.setupControlButtons()).toBe('');
});