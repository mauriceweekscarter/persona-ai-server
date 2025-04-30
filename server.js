// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt missing' });
  }
  res.json({
    response: `Pretend AI says: You said "${prompt}"`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

