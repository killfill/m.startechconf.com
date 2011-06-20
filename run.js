#!/usr/bin/env node

var cluster = require('cluster')
  , live = require('cluster-live')
  , mail = require('cluster-mail');

cluster('./lib/app.js')
  .set('workers', 3)
  .use(cluster.stats({connections: true, lightRequests: true}))
  .use(cluster.logger('logs'))
  .use(cluster.pidfiles('pids'))
  .use(live())
  .use(mail('pneumann@gmail.com', {from: 'node@sofsis.cl'}))
  .listen(7805);
