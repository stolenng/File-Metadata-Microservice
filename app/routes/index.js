'use strict';

var path = process.cwd();
var multer  = require('multer');
var upload = multer();

module.exports = function (app) {

	app.get('/', function (req, res) {
		res.sendFile(path + '/public/index.html');
	});
	
	app.post('/', upload.single('image'),function (req, res) {
		if(req.file){
			res.json({ size : req.file.size});
		}
		else{
			res.status(400);
			res.send('None shall pass');
		}
	});
	
	app.get('*', function (req, res) {
		res.sendFile(path + '/public/index.html');
	});

};
