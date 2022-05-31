const assert = require('assert');
const { sayHello } = require('../say-hello');
const { sayBye } = require('../say-hello');

describe('tests for sayHello func', () => {
  // it('runs tests', () => {
  //   const actual = 'test';
  //   const expected = 'test';
  //   assert.strictEqual(actual, expected);
  // });
  it('runs tests for sayHello', () => {
    const actual = sayHello('Jack');
    const expected = `Hello there, Jack.`;
    assert.strictEqual(actual, expected);
  });
  it('runs tests for sayBye', () => {
    const actual = sayBye('Jack');
    const expected = `Goodbye, Jack.`;
    assert.strictEqual(actual, expected);
  });
});
