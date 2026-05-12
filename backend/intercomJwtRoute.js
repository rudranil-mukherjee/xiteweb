// Example Express.js endpoint for generating Intercom JWT securely
// Place this file in your backend server code (not in the frontend)

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Replace with your Intercom secret
const INTERCOM_SECRET = process.env.INTERCOM_SECRET;

router.post('/api/intercom-jwt', (req, res) => {
  const { user_id } = req.body;
  if (!user_id) {
    return res.status(400).json({ error: 'Missing user_id' });
  }
  const payload = {
    sub: user_id,
    iat: Math.floor(Date.now() / 1000)
  };
  try {
    const token = jwt.sign(payload, INTERCOM_SECRET, { algorithm: 'HS256' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'JWT generation failed' });
  }
});

module.exports = router;

