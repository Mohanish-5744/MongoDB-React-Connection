const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = require('./routes/blogs');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', blogRoutes);

module.exports = app;
