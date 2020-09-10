const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')

//Database
const connectDB = require('./config/db');


//Load config file
dotenv.config({ path: './config/config.env'})

connectDB()

const app = express();

if (process.env.NODE_ENV === 'developemnt'){
    app.use(morgan('dev'))
}


//Handlebars 
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Static Folders
app.use(express.static(path.join(__dirname, 'static')))

//Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
