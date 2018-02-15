const express       = require('express');
const bodyParser    = require('body-parser');
// const jwt           = require('jsonwebtoken');

// const config        = require('config.js');
const logger       = require('./lib/_logger/index.js');

const app           = express();


/**
 *
 * @type {number}
 *
 * @description Used to create, sign, and verify tokens
 */
const port = process.env.PORT || 8080;


/**
 * @description Secret variable
 */
// app.set('superSecret', config.SECRET);


/**
 * @description Create a write stream (in append mode) - HTTP request logger middleware
 * Use morgan npm to log requests to the file.
 */
app.use(logger.morganLogger);


/**
 * @description Use body parser so we can get info from POST and/or URL parameters
 */
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


/**
 * @description Basic route
 */
app.get('/', (req, res) => {
    res
        .status(200)
        .send('NodeJS/Express.js server...');
});


/**
 * @description get an instance of the router for api routes
 */
const apiRoutes     = express.Router();


apiRoutes.get('/auth', (req, res) => {
    res.send('Auth API...');
});
apiRoutes.get('/profile', (req, res) => {
    res.send('Profile API...');
});
apiRoutes.get('/task', (req, res) => {
    res.send('Task API...');
});
apiRoutes.get('/contacts', (req, res) => {
    res.send('Contacts API...');
});
apiRoutes.get('/hours', (req, res) => {
    res.send('Hours API...');
});
apiRoutes.get('/setting', (req, res) => {
    res.send('Setting API...');
});


/**
 * @description Apply the routes to our application with the prefix /api
 */
app.use('/api', apiRoutes);

app.use(function(req, res, next) {
    res
        .status(404)
        .send('404: Sorry cant find that!');
});

app.use(function(err, req, res, next) {
    res
        .status(500)
        .send('500: Something broke!');
});


/**
 * @description Start the server
 */
app.listen(port);
