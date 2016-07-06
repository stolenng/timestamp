'use strict';

var path = process.cwd();
var timestamp = require(path + '/app/models/timestamp.js');
var moment = require('moment');


module.exports = function (app, passport) {


	app.route('/:id').get( function (req, res) {
		  var time = req.params.id;
		  var timeStamp = new timestamp();
		  

		  if(!isNaN(time)) {
		  	console.log(time);
			var unixMomentObj = moment(time, "X");
			timeStamp.unix = time;
		  	timeStamp.natural = unixMomentObj.format("LL");
		  }

		  var naturalMomentObj = moment(time);
		  
		  if(naturalMomentObj.format() != "Invalid date") {
		  	timeStamp.unix = naturalMomentObj.format("X");
		  	timeStamp.natural = time;
		  }

  		  

		  res.json({
			timeStamp
		  });   
		});

};
