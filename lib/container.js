var fs = require('fs');

var container = module.exports = {};

var memory = {};

container.load = function(type, cb) {
  var data = memory[type];
  if (data) return cb(null, data);

  fs.readFile('data/'+type+'.json', 'utf8', function(err, data) {
    console.log('loading '+type+' from file');
    memory[type] = data;
    cb(err, data);
  });

}

