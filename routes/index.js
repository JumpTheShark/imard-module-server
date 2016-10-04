const express = require('express');

const router = express.Router(),
  getRoute = ( (data) => 
    router.get('/', (req, res, next) => {
      res.render('index', data);
    })
  );

/* GET home page. */



module.exports = getRoute;
