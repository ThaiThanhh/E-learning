const path = require('path');
const express = require('express');
const CookieParser = require('cookie-parser');
const xss = require('xss-clean');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
//ROUTERS
const viewRouter = require('./routes/viewRoutes');


//GLOBAL MIDDLEWARES
const app = express();

//View engine
const ehbs = hbs.create({
	defaultLayout: 'main',
	extname: '.hbs',
})
app.engine('hbs', ehbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//Set security HTTP Headers
app.use(helmet());

//Create a logger middleware
if (process.env.NODE_ENV === 'development') {
//Only log error responses
	morgan('combined', {
		skip: function (req, res) { return res.statusCode < 400 }
	})
}

// Body parser, reading data from body into req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Prevent CORS
app.use(cors({
	credentials: true,
	origin: 'http://localhost:8000',
	optionsSuccessStatus: 200
}));

app.use(CookieParser());
app.use(xss());

//ROUTES
app.use('/', viewRouter);

app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
