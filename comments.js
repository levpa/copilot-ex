// Create web server
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  res.status(201).send('Comment created');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.status(200).send('Get all comments');
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  res.status(200).send('Get a comment by id');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.status(200).send('Comment updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.status(204).send('Comment deleted');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});