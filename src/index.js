const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;


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

app.get('/', (req, res) => {
    res.render('home');
});



app.get('/news', (req, res) => {
    console.log(req.query.q)
    res.render('news');
});

app.get('/search', (req, res) => {
    console.log(req.query.q)
    res.render('search');
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})