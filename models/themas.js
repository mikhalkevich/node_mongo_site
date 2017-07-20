var mongoose = require('../config/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
	body: {
        type: String
	},
	url: {
		type: String,
		unique: true
	}
});

exports.Themas = mongoose.model('themas', schema);