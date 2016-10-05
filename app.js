const express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),

    routes = require('./routes/index'),
    modulePreview = require('./routes/modulePreview'),
    moduleMeta = require('./routes/moduleMeta'),
    moduleContent = require('./routes/moduleContent'),
    moduleReadme = require('./routes/moduleReadme');

const appGenerator = (data, body, readme) => {
    const app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', routes({
        meta: data
    }));

    app.use('/info', routes({
        meta: data
    }));

    app.use('/content', routes({
        meta: data
    }));

    app.use('/readme', routes({
        meta: data
    }));

    app.get('/module-preview.html', modulePreview({
        meta: data.meta
    }));

    app.get('/module-info.html', moduleMeta({
        meta: data.meta
    }));

    app.get('/module-content.html', moduleContent(data));

    app.get('/module-readme.html', moduleReadme(data));

    app.get('/module-view404.html', (req, res, next) => {
        const options = {
            root: __dirname + '/public/',
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
    };

    res.sendFile('/components/module-view404/module-view404.html', options, (err) => {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent');
        }
    });

    });

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    return app;
}


module.exports = appGenerator;
