PATH=$PATH:~/node_modules/uglify-js/bin
cat resources/js/sencha-touch.js app/index.js app/views/Viewport.js app/models/Speaker.js app/stores/Speakers.js app/views/Speakers.js app/stores/Sponsors.js  app/views/Sponsors.js app/models/Front.js app/stores/Front.js app/views/Front.js  app/models/Tweet.js app/stores/Tweets.js app/views/Twitter.js  |uglifyjs  > resources/min.js
