import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());

app.use(express.static('public'));

app.get('/api/quote', async (req, res) => {
    try {
        const response = await fetch('https://favqs.com/api/qotd');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quote' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
