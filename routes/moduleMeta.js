const express = require('express');

const router = express.Router(),
    getRoute = ( (data) =>
            router.get('/module-info.html', (req, res, next) => {
                res.render('moduleMeta', data);
            })
    );

/* GET module-meta component. */

module.exports = getRoute;
