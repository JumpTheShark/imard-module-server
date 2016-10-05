const express = require('express');

const router = express.Router(),
    getRoute = ( (data) =>
            router.get('/module-content.html', (req, res, next) => {
                res.render('moduleContent', data);
            })
    );

/* GET module-content component. */

module.exports = getRoute;
