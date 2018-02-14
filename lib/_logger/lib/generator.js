const pad = require('./pad');

/**
 *
 * @param time {Date} - If both rotation by interval is enabled and options.rotationTime (see below) is false, the start time of rotation period, otherwise the time when rotation job started. If null, the not-rotated file name must be returned.
 *
 * @returns {string}
 *
 * @description Function which returns the rotated file name can be used.
 */
module.exports = (time) => {
    if(!time) {
        return "_file.log";
    }

    let month  = time.getFullYear() + "-" + pad(time.getMonth() + 1) + "-" + pad(time.getDate());
    let day    = pad(time.getDate());
    let hour   = pad(time.getHours());

    return month + "/" + month + "-" + day + "-" + hour + "_file.log";
};