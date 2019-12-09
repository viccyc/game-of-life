const rules = require('../js/rules');

test('runs start button function', () => {
  expect(rules.startButtonHandler()).toBe('startButton function');
});

test('runs clear button function', () => {
  expect(rules.clearButtonHandler()).toBe('clearButton function');
});