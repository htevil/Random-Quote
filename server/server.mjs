import express from 'express';
import cors from 'cors'; // Import cors for CORS handling
import axios from 'axios';


const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins during development (adjust as needed)
app.use(cors());

// Route handler for the root path (`/`)
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Route handler for fetching quotes (replace with your chosen quote API)
app.get('/api/quote', async (req, res) => {
  try {
    // Replace with your chosen API endpoint and any required parameters
    const response = await axios.get('https://favqs.com/api/qotd'); // Placeholder
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching quote' });
  }
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
