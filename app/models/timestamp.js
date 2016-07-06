'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Timestamp = new Schema({
	unix: Number,
	natural: String,
	_id:{ select:false }
});

module.exports = mongoose.model('Timestamp', Timestamp);
