import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Define a route to fetch data from the favqs API and return it
app.get('/api/quote', async (req, res) => {
    try {
        const response = await fetch('https://favqs.com/api/qotd');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ error: 'Failed to fetch quote' });
    }
});

// Define a route to fetch data from the mocky API and return it
app.get('/api/Quote', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://favqs.com/api/qotd',
    };
    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
      res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
