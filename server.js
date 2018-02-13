// =======================
// GET THE PACKAGE WE NEED
// =======================
const express       = require('express');
const bodyParser    = require('body-parser');
// const jwt           = require('jsonwebtoken');

const config        = require('./config');

const app           = express();


// =======================
// Configuration
// =======================
const port = process.env.PORT || config.PORT;
app.set('superSecret', config.SECRET);


// =======================
// Create a write stream (in append mode)
// // =======================
// let logDirectory = path.join(__dirname, 'log');
//
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
//
// let pad = (num) => {
//     return (num > 9 ? "" : "0") + num;
// };
//
// let generator = (time) => {
//     if(!time) {
//         return "_file.log";
//     }
//
//     let month  = time.getFullYear() + "-" + pad(time.getMonth() + 1) + "-" + pad(time.getDate());
//     let day    = pad(time.getDate());
//     let hour   = pad(time.getHours());
//
//     return month + "/" + month + "-" + day + "-" + hour + "_file.log";
// };
//
// let date = new Date();
//
// let accessLogStream = rfs(generator(date), {
//     size:     '10M',    // rotate every 10 MegaBytes written
//     interval: '1d',     // rotate daily
//     compress: 'gzip',   // compress rotated files
//     path: logDirectory
// });
//
// const morganConfig = "combined";
//
// app.use(morgan(morganConfig, {
//     stream: accessLogStream
// }));


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
    res.send('NodeJS/Express.js server.');
});

const apiRoutes     = express.Router();

apiRoutes.get('/auth', (req, res) => {
    res.send('Auth API...');
});

app.use('/api', apiRoutes);

// app.use((req, res, next) => {
//     let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//
//     // render the error page
//     res.status(err.status || 500);
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

// =======================
// Start the server
// =======================
app.listen(port);