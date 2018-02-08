// =======================
// GET THE PACKAGE WE NEED
// =======================
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

const config = require('./config');


// =======================
// Configuration
// =======================
const port = process.env.PORT || 8080;
app.set('superSecret', config.secret);


// =======================
// Use body parser so we can get info from POST and/or URL parameters
// =======================
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



// =======================
// Routes
// =======================
app.get('/', (req, res) => {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});


// =======================
// Start the server
// =======================
app.listen(port);



// const http = require('http');
//
// http.createServer(function (req, res) {
//
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello Ionic! To beat shit out someone');
//
// }).listen(process.env.PORT || 8080);