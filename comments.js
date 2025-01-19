// Create web server with express
const express = require('express');
const app = express();

// Use middleware to parse JSON
app.use(express.json());

// Create an array to store comments
const comments = [];

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to post a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});