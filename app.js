const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const search = require('./route/search')
const upcoming = require('./route/upcoming')

//Initializing Body Parser Here
app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(bodyParser.json())

//site.com/search
app.use('/search', search)
//site.com//upcoming
app.use('/upcoming', upcoming)

module.exports = app;

