import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins (adjust as needed for production)
app.use(cors());

app.get('/api/quote', async (req, res) => {
  try {
    const response = await axios.get('https://favqs.com/api/qotd');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching quote' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
