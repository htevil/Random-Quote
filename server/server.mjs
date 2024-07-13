import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Define the root route to print "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
