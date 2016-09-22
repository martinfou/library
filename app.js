var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
var books = [{
  "read": false,
  "author": "Dionne Wiggins",
  "genre": "bio",
  "title": "Lorem aliquip dolore pariatur sint"
}, {
  "read": false,
  "author": "Bridgette Floyd",
  "genre": "fiction",
  "title": "id consequat dolor dolor pariatur"
}, {
  "read": true,
  "author": "Douglas Levine",
  "genre": "bio",
  "title": "proident magna laboris esse nulla"
}, {
  "read": true,
  "author": "Rose Stuart",
  "genre": "fiction",
  "title": "aliqua consectetur excepteur labore dolore"
}, {
  "read": false,
  "author": "Verna Robinson",
  "genre": "fiction",
  "title": "commodo aliqua laboris ullamco dolor"
}, {
  "read": false,
  "author": "Raquel Boone",
  "genre": "bio",
  "title": "reprehenderit anim elit sunt culpa"
}, {
  "read": false,
  "author": "Frank Rowland",
  "genre": "novel",
  "title": "voluptate do tempor consequat qui"
}, {
  "read": false,
  "author": "Erin Cervantes",
  "genre": "fiction",
  "title": "eu ut magna id duis"
}, {
  "read": false,
  "author": "Mcgowan Maynard",
  "genre": "bio",
  "title": "est elit adipisicing veniam excepteur"
}, {
  "read": false,
  "author": "Elaine Hewitt",
  "genre": "novel",
  "title": "ex Lorem nulla incididunt eiusmod"
}];
bookRouter.route('/')
  .get(function(req, res) {
    res.render('books', {
      title: 'hello from books',
      nav: [{
        Link: '/Books',
        Text: 'Books'
      }, {
        Link: '/Authors',
        Text: 'Authors'
      }],
      books: books
    });
  });

bookRouter.route('/single')
  .get(function(req, res) {
    res.send('Hello single Books');
  });

app.use('/Books', bookRouter)

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
