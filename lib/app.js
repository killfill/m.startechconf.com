var express = require('express')
  , container = require('./container.js');

var app = module.exports = express.createServer();

app.configure(function() {
    app.use(express.favicon())
  , app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }))
  , app.use(express.static(__dirname + '/../public', {maxAge: 31557600000}))
  , app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
});

app.get('/api/reload', function(req, res) {
  container.reload(function(data) {
    res.send(data);
  });
});

app.get('/api/data/:type', function(req, res) {
  var content = container.memory[req.params.type];
  res.send(content||404);
});

setInterval(function() {
  container.reload();
}, 1000 * 3600 * 24);

container.reload();

if (!module.parent) {
  app.listen(3002);
  console.log("Listening on %j", app.address());
}
