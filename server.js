var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/HP.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'HP.html'));
});

app.get('/ui/Dumbledore.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Dumbledore.html'));
});

app.get('/ui/dm.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dm.html'));
});

app.get('/ui/hg.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hg.html'));
});

app.get('/ui/oc.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'oc.html'));
});

app.get('/ui/ron.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ron.html'));
});

app.get('/ui/vo.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vo.html'));
});

app.get('/ui/wands.html', function (req, res) {
    res.sendFile(path.join(_dirname, 'ui', 'wands.html'));
}


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
