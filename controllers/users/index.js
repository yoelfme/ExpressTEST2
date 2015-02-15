var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
	res.render('new_user');
});

router.post('/',function(req, res, next) {
	var body = req.body;

	var newUser = new db.User({
		name: body.name,
		isMale: u.isMale==="on" ? true : false
	});

	newUser.save(function(error, user) {
		if(error)
			res.json(error);

		res.redirect('/');
	});
})

module.exports = router;