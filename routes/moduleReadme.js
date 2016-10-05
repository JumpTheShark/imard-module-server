const express = require('express');

const router = express.Router(),
    getRoute = ( (data) =>
            router.get('/module-readme.html', (req, res, next) => {
                res.render('moduleReadme', data);
            })
    );

/* GET module-readme component. */

module.exports = getRoute;
