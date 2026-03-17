// Express router setup for the tally counter API

const express = require('express');
const router = express.Router();
const logger = require('./logger');  
const counter = require('./counter'); 

// GET /counter-read → return current counter value
router.get('/counter-read', (req, res) => {
  const value = counter.readCounter();
  logger.info(`[ENDPOINT] GET '/counter-read'`);
  logger.info(`[COUNTER] read ${value}`);
  res.json({ count: value });
});

// GET /counter-increase → increment counter and return new value
router.get('/counter-increase', (req, res) => {
  const value = counter.increaseCounter();
  logger.info(`[ENDPOINT] GET '/counter-increase'`);
  logger.info(`[COUNTER] increase ${value}`);
  res.json({ count: value });
});

// GET /counter-reset → reset counter to zero
router.get('/counter-reset', (req, res) => {
  const value = counter.resetCounter();
  logger.info(`[ENDPOINT] GET '/counter-reset'`);
  logger.info(`[COUNTER] zeroed ${value}`);
  res.json({ count: value });
});

module.exports = router;