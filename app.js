var express = require('express');

var app = express();

var port = process.env.PORT || 5000;


app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'hello from render',
    nav: [{
      Link: '/Books',
      Text: 'Books'
    }, {
      Link: '/Authors',
      Text: 'Authors'
    }]
  });
});

app.listen(port, function(err) {
  console.log('running server on port ' + port);
});
