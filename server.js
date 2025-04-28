const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post('http://localhost:11434/api/chat', {
      model: 'mistral',
      prompt: prompt,
      stream: false,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error talking to AI:', error.message);
    res.status(500).json({ error: 'Failed to connect to AI' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
