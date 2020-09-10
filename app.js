const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const path = require('path');

//Database
const connectDB = require('./config/db');


//Load config file
dotenv.config({ path: './config/config.env'});

//Passport Config
require('./config/passport')(passport)

connectDB()

const app = express();

if (process.env.NODE_ENV === 'developemnt'){
    app.use(morgan('dev'))
}


//Handlebars 
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Session
//app.set('trust proxy', 1) //trust first proxy
app.use(session({
  secret: 'Loli For Life',
  resave: false,
  saveUninitialized: false,
  /* cookie: { secure: true } */
}))

//Passport middlewares
app.use(passport.initialize());
app.use(passport.session());

//Static Folders
app.use(express.static(path.join(__dirname, 'static')))

//Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
