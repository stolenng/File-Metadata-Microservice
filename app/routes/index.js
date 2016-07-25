'use strict';

var path = process.cwd();
/*
var imageAPI = require(path + '/app/controllers/imageAPI.server.js');
var imageParser = require("../models/imageParser.js");
var history = require("../models/history.js");
var apicache = require('apicache').options({ debug: true }).middleware;
var imgAPI = new imageAPI();
*/

var multer  = require('multer');
var upload = multer();




module.exports = function (app) {

	app.get('/', function (req, res) {
		res.sendFile(path + '/public/index.html');
	});
	
	app.post('/', upload.single('image'),function (req, res) {
		var size = 0;
		res.json({ size : req.file.size});
	});

};
