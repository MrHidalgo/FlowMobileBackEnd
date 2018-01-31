const gulp      = require('gulp'),
    path        = require('path'),
    zip         = require('gulp-zip'),
    minimist    = require('minimist'),
    fs          = require('fs');

const knownOptions = {
    string: 'packageName',
    string: 'packagePath',
    default: {
        packageName: "Package.zip",
        packagePath: path.join(__dirname, '_package')
    }
};

const options = minimist(process.argv.slice(2), knownOptions);

gulp.task('default', function () {

    const packagePaths = [
        '**',
        '!**/_package/**',
        '!**/typings/**',
        '!typings',
        '!_package',
        '!gulpfile.js'
    ];

    //add exclusion patterns for all dev dependencies
    const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    const devDeps = packageJSON.devDependencies;

    for (let propName in devDeps) {
        let excludePattern1 = "!**/node_modules/" + propName + "/**";
        let excludePattern2 = "!**/node_modules/" + propName;

        packagePaths.push(excludePattern1);
        packagePaths.push(excludePattern2);
    }

    return gulp.src(packagePaths)
        .pipe(zip(options.packageName))
        .pipe(gulp.dest(options.packagePath));
});
