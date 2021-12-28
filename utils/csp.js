exports.loadCSPSupport = (req, res, next) => {
	res.setHeader(
		'Content-Security-Policy',
		'script-src-elem https://firebasestorage.googleapis.com http://localhost:8000 index:233 products:648'
	);
	//CORS Support
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);

	next();
};
