var express = require('express')
  , fs = require('fs')
  , container = require('./container.js');

var app = module.exports = express.createServer();


app.configure(function() {
    app.use(express.favicon())
  //, app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }))
  , app.use(express.logger())
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
  if (!content) {
	container.memory['schedule'] = require('./static_data/schedule.js');
  }
  res.contentType('application/json');
  if (!content)
	return res.send(404);
  sendJsonP(res, req.query.callback, content);
});

function sendJsonP(res, cb, content) {
  if (cb)
    return res.send(cb + '(' + JSON.stringify(content) + ')');
  else
    return res.send(content);
}

setInterval(container.reload, 1000*3600*24);

container.reload();
