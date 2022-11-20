const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;


// maybe write: const route = require('./routes/index.js');
// or if it is an index.js file, it will be loaded automatically
const route = require('./routes');

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));

// template engine 
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.set('views', './src/resources/views');

//Routes init
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})