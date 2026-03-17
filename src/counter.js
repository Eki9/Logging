// Counter module
// Stores counter state in-memory and provides functions to manipulate it

// Current count
let count = 0;

// Read current count
function readCounter() {
  return count;
}

// Increase count by 1
function increaseCounter() {
  count += 1;
  return count;
}

// Reset counter to 0
function resetCounter() {
  count = 0;
  return count;
}

// Export functions
module.exports = {
  readCounter,
  increaseCounter,
  resetCounter
};