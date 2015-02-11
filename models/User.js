module.exports = function (mongoose) {
	var Schema = mongoose.Schema;

	var UserSchema = new Schema({
		name: String,
		isMale: Boolean
	});

	return mongoose.model('User',UserSchema)
}