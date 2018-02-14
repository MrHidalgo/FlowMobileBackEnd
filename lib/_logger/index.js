const morgan    = require('morgan'),
    rfs         = require('rotating-file-stream'),
    fs          = require('fs'),
    path        = require('path');


const date = new Date();


const logDirectory = path.join(__dirname, 'log');


const generator = require('./lib/generator')(date);
const config = require('./lib/config')(logDirectory);


fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);


/**
 * @link https://github.com/iccicci/rotating-file-stream/blob/master/README.md
 *
 * @description Creates a stream.Writable to a file which is rotated. Rotation behaviour can be deeply customized; optionally, classical UNIX logrotate behaviour can be used.
 */
let accessLogStream = rfs(generator, config.rotatingFileStream);


/**
 *
 * @type {Function}
 *
 * @link https://github.com/expressjs/morgan/blob/master/README.md
 */
exports.morganLogger = morgan(config.predefinedFormats, {
    stream: accessLogStream
});
