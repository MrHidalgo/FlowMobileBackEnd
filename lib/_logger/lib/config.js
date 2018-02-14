/**
 *
 * @param logDir
 *
 * @returns {{rotatingFileStream: {size: string, interval: string, compress: string, path: *}, predefinedFormats: string}}
 */
module.exports = (logDir) => {
    return {
        'rotatingFileStream' : {
            size:     '10M',    // rotate every 10 MegaBytes written
            interval: '1d',     // rotate daily
            compress: 'gzip',   // compress rotated files
            path: logDir
        },
        'predefinedFormats' : 'combined'
    };
};