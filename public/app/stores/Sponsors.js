app.stores.sponsors = new Ext.data.JsonStore({
	model: 'Speaker',
	autoLoad: true,
	proxy: {
		type: 'rest',
		url: 'api/sponsors'
	}
});

Ext.regStore('sponsors', app.stores.sponsors);
