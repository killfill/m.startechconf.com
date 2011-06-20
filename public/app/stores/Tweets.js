app.stores.tweets = new Ext.data.JsonStore({
	model: 'Tweet',
	autoLoad: true,
	proxy: {
		type: 'scripttag',
		url: 'http://search.twitter.com/search.json?q=startechconf',
		reader: {
			root: 'results',
			type: 'json'
		}
	}
});

Ext.regStore('tweets', app.stores.tweets);
