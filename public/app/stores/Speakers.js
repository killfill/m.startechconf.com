app.stores.speakers = new Ext.data.JsonStore({
	model: 'Speaker',
	autoLoad: true,
	proxy: {
		type: 'rest',
		url: 'api/data/speakers'
	}
});

Ext.regStore('speakers', app.stores.speakers);
