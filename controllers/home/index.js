var express = require('express');
var app = module.exports = express();
var router = express.Router();

app.set('views',__dirname + '/views');

/* GET home page */
router.get('/',function (req, res, next) {
	console.log(__dirname);
	res.render('home',{
		title: 'Home'
	})
});

module.exports = router;