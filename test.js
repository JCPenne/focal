const person = {
  firstName: 'bob',
  lastName: 'smith',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

//console.log(`Hello ${person.fullName()}`);

// try {
//   person === object;
// } catch {
//   console.log(`person is an Object`);
// }

//console.log(sayHello('Jack'));
// console.assert(sayHello('Chantal') === 'Hello there, Jack.', 'sayhello returned malformed string.');
// console.table({
//   expected: 'Hello there, Jack.',
//   actual: sayHello('Chantal'),
//   passed: this.actual === 'Hello there, Jack.'
// });

// const assert = require('assert');

// const actual = sayHello('Jack')
// const expected = 'Hello there, Jack!';

// assert.strictEqual(actual,expected);

const {sayHello} = require('./say-hello.js');
console.log(sayHello('Jack'));

const {sayBye} = require('./say-hello.js');
console.log(sayBye('Jack'));
