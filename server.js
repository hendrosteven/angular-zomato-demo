const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static('./dist/ng-demo'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/ng-demo/'});
});

// default Heroku PORT
app.listen(process.env.PORT || 8080);