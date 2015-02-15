var express = require('express');
var router = express.Router();

// It is controller for CRUD the Users
router.get('/', function(req, res, next) {
	db.User.find().exec(function(error, data) {
		if (error)
			return res.json(error);

		return res.render('u_list', {
			data: data
		});
	});
});

// Get view create
router.get('/new', function(req, res, next) {
	res.render('u_new');
});

// create
router.post('/',function(req, res, next) {
	var body = req.body;

	var newUser = new db.User({
		name: body.name,
		isMale: body.isMale==="on" ? true : false
	});

	newUser.save(function(error, user) {
		if(error)
			res.json(error);

		res.redirect('/user');
	});
});

// Get view edit
router.get('/edit/:id', function (req, res, next) {
	var userId = req.params.id;

	db.User.findById(userId, function (error, data) {
		if (error)
			return res.json(error);

		res.render('u_edit', data);
	});
});

// edit
router.put('/:id', function (req, res, next) {
	var user = req.body,
		userId = req.params.id;

	delete user.id;
	delete user._id;

	db.User.findByIdAndUpdate(userId, user, function (error, data) {
		if (error) 
			return res.json(error);

		res.redirect('/user');
	})


});

// delete
router.get('/delete/:id', function (req, res, next) {
	var userId = req.params.id;

	db.User.findByIdAndRemove(userId, function (error, data) {
		if (error) 
			return res.json(error);

		res.redirect('/user');
	})
})

module.exports = router;