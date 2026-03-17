// Import Winston logging library
const { createLogger, transports, format } = require('winston');

// Create a Winston logger instance
const logger = createLogger({
  // Minimum level of messages to log
  level: 'info',
  
  // Format logs as JSON with timestamp
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  
  // Define where logs are sent (transports)
  transports: [
    // Output logs to the console
    new transports.Console(),

    // Output error-level logs to a separate file
    new transports.File({ filename: 'logs/error.log', level: 'error' }),

    // Output all logs to a combined log file
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

// Export logger for use in other modules (e.g., main app, tests)
module.exports = logger;