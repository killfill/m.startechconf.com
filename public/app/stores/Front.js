app.stores.front = new Ext.data.JsonStore({
	model: 'Front',
	autoLoad: true,
	proxy: {
		type: 'rest',
		url: 'api/data/main'
	}
});

Ext.regStore('front', app.stores.front);
