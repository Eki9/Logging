// Import Chai assertion library and Sinon for spying on functions
const { expect } = require('chai');
const sinon = require('sinon');

// Import the logger to test
const logger = require('../src/logger');

// Node.js path module to safely handle file paths
const path = require('path');

describe('Logger Tests (Task 1)', () => {

  // Test if the logger level is correctly set
  it('should have correct log level', () => {
    expect(logger.level).to.equal('info');
  });

  // Test logging of info messages
  it('should log info message', () => {
    const spy = sinon.spy(logger, 'info'); // Spy on logger.info
    logger.info('Test info message');      // Call info log
    expect(spy.calledOnce).to.be.true;     // Check it was called
    spy.restore();                          // Restore original function
  });

  // Test logging of warning messages
  it('should log warning message', () => {
    const spy = sinon.spy(logger, 'warn');
    logger.warn('Test warn message');
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });

  // Test logging of error messages
  it('should log error message', () => {
    const spy = sinon.spy(logger, 'error');
    logger.error('Test error message');
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });

  // Test that file transports are correctly configured
  it('should have file transports configured', () => {
    const hasErrorFile = logger.transports.some((t) => {
      // Check if transport is a File transport and filename ends with error.log
      return t.constructor.name === 'File' &&
        path.basename(t.filename || t._filename) === 'error.log';
    });

    const hasCombinedFile = logger.transports.some((t) => {
      // Check if transport is a File transport and filename ends with combined.log
      return t.constructor.name === 'File' &&
        path.basename(t.filename || t._filename) === 'combined.log';
    });

    // Assertions to ensure both file transports exist
    expect(hasErrorFile).to.be.true;
    expect(hasCombinedFile).to.be.true;
  });

});