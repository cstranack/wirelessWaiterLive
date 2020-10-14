var express = require('express');
var app = express();
var handlebars = require('express-handlebars');


const port = process.env.PORT || 3000;

//---ROUTES---
app.use(express.static('public'));


app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));


//web application getting something from the server
//req = request //res = response //=>'fat arrow' = function
app.get('/', (req, res) => {
    res.render('homePage', {layout: 'main'} );

});


//listening for requests on port 3000
app.listen(port,() => {
    console.log(`Server listening on port:  ${port} :) `);
});