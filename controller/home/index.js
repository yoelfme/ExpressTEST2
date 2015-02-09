var express = require('express');
var app = express();

// Set roots of views
app.set('views', __dirname + '/views');
app.set('views engine','jade');

app.get('/',function (req, res) {
	res.render('home', {
		title: 'Bienvenido'
	})
})