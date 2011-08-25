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
	},
	listeners: {
		load: function(store) {
			store.data.items.forEach(function(rec) {
				var at = rec.get('created_at');
				rec.set('created', at.format('human') + ' a las ' + at.format('humantime'));
			});
		}
	}
});

Ext.regStore('tweets', app.stores.tweets);
