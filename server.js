const express       = require('express');
const bodyParser    = require('body-parser');
// const jwt           = require('jsonwebtoken');

// const config        = require('config');
// const _logger       = require('./lib/_logger');

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
// app.use(_logger.morganLogger);


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
// const apiRoutes     = express.Router();
//
//
// apiRoutes.get('/auth', (req, res) => {
//     res.send('Auth API...');
// });
// apiRoutes.get('/profile', (req, res) => {
//     res.send('Profile API...');
// });
// apiRoutes.get('/task', (req, res) => {
//     res.send('Task API...');
// });
// apiRoutes.get('/contacts', (req, res) => {
//     res.send('Contacts API...');
// });
// apiRoutes.get('/hours', (req, res) => {
//     res.send('Hours API...');
// });
// apiRoutes.get('/setting', (req, res) => {
//     res.send('Setting API...');
// });


/**
 * @description Apply the routes to our application with the prefix /api
 */
// app.use('/', apiRoutes);

// app.use((req, res, next) => {
//     let err = new Error('Not Found');
//
//     err.status = 404;
//     next(err);
// });
//
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//
//     // render the error page
//     res.status(err.status || 500);
//
//     if(err.status === 404){
//         res.format({
//             'text/plain': () => {
//                 res.send({
//                     message: 'Not Found Data'
//                 });
//             },
//             'text/html': () => {
//                 res.send("404: Sorry can't find that!");
//             },
//             'application/json': () => {
//                 res.send({
//                     message: 'Not Found Data'
//                 });
//             },
//             'default': () => {
//                 res.status(406).send('Not Acceptable');
//             }
//         })
//     }
//
//     // when status is 500, error handler
//     if(err.status === 500) {
//         return res.send({
//             message: 'Error Occur'
//         });
//     }
// });


/**
 * @description Start the server
 */
app.listen(port);
