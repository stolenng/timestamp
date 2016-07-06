'use strict';

var path = process.cwd();
var timestamp = require(path + '/app/models/timestamp.js');
var moment = require('moment');


module.exports = function (app, passport) {


	app.route('/:id').get( function (req, res) {
		  var time = req.params.id;
		  var timeStamp = new timestamp();
		  var unixMomentObj = moment(time, "X");
		  var naturalMomentObj = moment(time);
		  
		  if(unixMomentObj.isValid()) {
		  	timeStamp.unix = time;
		  	timeStamp.natural = unixMomentObj.format("LL");
		  }
		  console.log(naturalMomentObj);
		  if(naturalMomentObj.isValid()) {
		  	timeStamp.unix = naturalMomentObj.format("X");
		  	timeStamp.natural = time;
		  }

  		  

		  res.json({
			timeStamp
		  });   
		});

};
