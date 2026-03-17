// Import Chai assertion library
const { expect } = require('chai');

// Import the counter module
const counter = require('../src/counter');

// Describe the test suite for the Counter module
describe('Counter Module (Task 2)', () => {

  // Before each test, reset the counter to 0 to ensure tests are independent
  beforeEach(() => counter.resetCounter());

  // Test that the counter starts at 0
  it('should start at 0', () => {
    expect(counter.readCounter()).to.equal(0);
  });

  // Test that incrementing the counter works correctly
  it('should increment', () => {
    counter.increaseCounter();
    expect(counter.readCounter()).to.equal(1);
  });

  // Test that resetting the counter sets it back to 0
  it('should reset to 0', () => {
    counter.increaseCounter();  // increase first
    counter.resetCounter();     // then reset
    expect(counter.readCounter()).to.equal(0);
  });

});