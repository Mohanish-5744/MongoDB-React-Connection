const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Blog = require('./models/Blog'); // Import Blog model

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin1234@mentorbot.6ggoacm.mongodb.net/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).send('Error fetching blogs');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
