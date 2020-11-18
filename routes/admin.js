const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    // next must be called to reach next middleware
});

router.post('/product', (req, res, next) => {
    
    // var title = req.body.title;
    res.send(`<h1>${req.body.title}<h1>`);
});


module.exports = router;