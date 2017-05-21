var express = require('express');
var app = express();
var port = 3000;

app.use(express.static("./"));

app.get('/', function(req, res) {
  res.send(static);
});

app.listen(port, function() {
  console.log(`Express started on port ${port}`);
});
