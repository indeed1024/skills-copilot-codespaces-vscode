// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4001;
const comments = require('./data/comments');

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

// Use body-parser to parse requests into JSON
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Get comments by ID
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const foundComment = comments.find(comment => comment._id === Number(id));
    if (foundComment) {
        res.send(foundComment);
    } else {
        res.status(404).send('Comment not found');
    }
});

// Add new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    if (newComment) {
        newComment._id = comments.length + 1;
        comments.push(newComment);
        res.send(newComment);
    } else {
        res.status(400).send('Invalid comment');
    }
});

// Delete comment by ID
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const index = comments.findIndex(comment => comment._id === Number(id));
    if (index !== -1) {
        comments.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Comment not found');
    }
});

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});git add comments.js