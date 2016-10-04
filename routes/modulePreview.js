const express = require('express');

const router = express.Router(),
  getRoute = ( (data) => 
    router.get('/module-preview.html', (req, res, next) => {
      res.render('modulePreview', data);
    })
  );

/* GET module-preview component. */



module.exports = getRoute;
