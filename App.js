'use strict';

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 8086;

app.use(express.static('public'));

//Hompage stuff
app.get('/', (req, res, next) => {
    res.sendFile('index.html', { root: './' });
});

app.get('/features', (req, res, next) => {
    res.sendFile('features.html', { root: './' });
});

app.get('/order', (req, res, next) => {
    res.sendFile('order.html', { root: './' });
});

app.get('/register', (req, res, next) => {
    res.sendFile('register.html', { root: './' });
});

//Where the server is located and listening
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});