exports.loadCSPSupport = (req, res, next) => {
	res.setHeader(
		'Content-Security-Policy',
		'script-src-elem https://firebasestorage.googleapis.com http://localhost:8000 https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'
	);
	//CORS Support
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);

	next();
};
