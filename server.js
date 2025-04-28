const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple POST endpoint to simulate AI
app.post('/chat', (req, res) => {
  const { prompt } = req.body;

  console.log("Received prompt:", prompt);

  // Dummy AI response for now
  const fakeResponse = `You said: ${prompt}. Here's my AI answer! 🚀`;
  res.json({ response: fakeResponse });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
