#!/usr/bin/env node

var app = require('./lib/app.js');

app.listen(7855);
console.log("Listening on %j", app.address());

