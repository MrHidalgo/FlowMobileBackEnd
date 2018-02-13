app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;

    // render the error page
    res.status(err.status || 500);
    if(err.status === 404){
        res.format({
            'text/plain': () => {
                res.send({
                    message: 'Not Found Data'
                });
            },
            'text/html': () => {
                res.send("404: Sorry can't find that!");
            },
            'application/json': () => {
                res.send({
                    message: 'Not Found Data'
                });
            },
            'default': () => {
                res.status(406).send('Not Acceptable');
            }
        })
    }

    // when status is 500, error handler
    if(err.status === 500) {
        return res.send({
            message: 'Error Occur'
        });
    }
});