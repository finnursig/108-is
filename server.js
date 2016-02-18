var express = require('express')
var app = express();
var port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('108.is');
})

app.listen(port);
