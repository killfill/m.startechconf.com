var express = require('express')
  , container = require('./container.js');

var app = module.exports = express.createServer();

app.configure(function() {
    app.use(express.favicon())
  , app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }))
  , app.use(express.static(__dirname + '/../public', {maxAge: 31557600000}))
  , app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))

});


app.get('/api/:type/:id?', function(req, res) {
  container.load(req.params.type, function(err, data) {
    if (err) {
      console.error(err);
      return res.end(err.message);
    }
    if (req.params.id) res.end(data[req.params.id])
    else res.end(data);
  });
});

/*
if (!module.parent) {
  app.listen(3001);
  console.log("Listening on %j", app.address());
}*/
