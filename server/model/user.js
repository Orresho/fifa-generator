var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    userName: { type: String, required: true, unique },
    firstName: { type: String, required: true },
    lastName: {type: String, required: true},
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Player', schema);
