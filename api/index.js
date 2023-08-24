// load dependencies
const env = require('dotenv');
const express = require('express');
const cors = require('cors');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const session = require('express-session');

const webRoutes = require('./routes');
const sequelize = require('./config/database');

const app = express();
app.use(cors({
	origin: '*'
}));

env.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: '1mb' }));

// required for csurf
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  	cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
}));

app.use(flash());

app.use(webRoutes);

sequelize
	//.sync({force : true})
	.sync()
	.then(() => {
		app.listen(process.env.API_PORT);
		//pending set timezone
		console.log("App listening on port " + process.env.API_PORT);
	})
	.catch(err => {
		console.log(err);
	});
