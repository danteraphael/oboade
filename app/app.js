var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

app.get('/', function (req, res) {
  console.log(app.mountpath); // /admin
  res.send('Homepage');
});

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // /admin
  res.send('Admin Homepage');
});

app.use('/admin', admin); // mount the sub app

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
