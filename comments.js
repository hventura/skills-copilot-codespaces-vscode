// Create web server
const express = require('express');

// Import the express module

// Create an instance of express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the root route!');
});

// GET route
app.get('/create', (req, res) => {
    res.send('GET request to the create route');
});

// POST route
app.post('/create', (req, res) => {
    res.send('POST request to the create route');
});

// DELETE route
app.delete('/delete', (req, res) => {
    res.send('DELETE request to the delete route');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});