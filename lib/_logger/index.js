const   morgan        = require('morgan'),
        rfs           = require('rotating-file-stream'),
        fs            = require('fs'),
        path          = require('path');


let logDirectory = path.join(__dirname, 'log');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

let pad = (num) => {
    return (num > 9 ? "" : "0") + num;
};

let generator = (time) => {
    if(!time) {
        return "_file.log";
    }

    let month  = time.getFullYear() + "-" + pad(time.getMonth() + 1) + "-" + pad(time.getDate());
    let day    = pad(time.getDate());
    let hour   = pad(time.getHours());

    return month + "/" + month + "-" + day + "-" + hour + "_file.log";
};

let date = new Date();

let accessLogStream = rfs(generator(date), {
    size:     '10M',    // rotate every 10 MegaBytes written
    interval: '1d',     // rotate daily
    compress: 'gzip',   // compress rotated files
    path: logDirectory
});

const morganConfig = "combined";

app.use(morgan(morganConfig, {
    stream: accessLogStream
}));
