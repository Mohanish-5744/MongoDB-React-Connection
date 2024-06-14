const mongoose = require('mongoose');
const app = require('./app');

const port = 5000;
//
// mongoose.connect('mongodb://localhost:27017/blog', // MongoDB connection on Local Machine

mongoose.connect('mongodb+srv://admin:admin1234@mentorbot.6ggoacm.mongodb.net/blog', // MongoDB connection MongoDB Atlas
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
