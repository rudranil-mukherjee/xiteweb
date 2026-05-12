import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Replace with your actual Intercom secret - for development, you can use a dummy secret
const INTERCOM_SECRET = process.env.INTERCOM_SECRET || 'dummy-secret-for-development';

app.use(cors());
app.use(express.json());

// Intercom JWT endpoint
app.post('/api/intercom-jwt', (req, res) => {
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
    console.error('JWT generation failed:', err);
    res.status(500).json({ error: 'JWT generation failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
