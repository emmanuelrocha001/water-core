const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');
// valid request handler
const app = express();
// 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// parse requests
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views','page-not-found.html'));
});







app.listen(3000)


