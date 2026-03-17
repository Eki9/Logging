// Main application entry for Tally Counter REST API

const express = require('express');
const logger = require('./logger');  // Task 1 logger
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Log app start
logger.info('[MAIN] Starting');

// Use the counter routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Handle server stop (CTRL+C)
process.on('SIGINT', () => {
  logger.info('[MAIN] Stopping');
  process.exit();
});