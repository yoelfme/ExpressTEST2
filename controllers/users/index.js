var express = require('express');
var router = express.Router();

app.get('/user/new', function(request, response) {
 
  response.render('new');
 
});