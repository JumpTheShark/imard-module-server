const express = require('express');

const router = express.Router(),
  getRoute = ( (data) => 
    router.get('/module-preview', (req, res, next) => {
      res.render('modulePreview', data);
    })
  );

/* GET module-preview component. */



module.exports = getRoute;
