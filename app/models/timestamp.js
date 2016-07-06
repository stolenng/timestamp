'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Timestamp = new Schema({
	unix: {type: Number, default:null},
	natural: {type: String, default:null},
	_id:{ select:false }
});

module.exports = mongoose.model('Timestamp', Timestamp);
