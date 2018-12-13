import express from 'express';

module.exports = app => {
	
	console.log('Middleware load...');
	// Settings
	app.set('port', process.env.PORT || 3080);
	app.set('json spaces', 4);

	// middlewares
	app.use(express.json());
	app.use((req, res, next) => {
		res.setHeader('X-Powered-By', 'C++');
		next();
	});
};