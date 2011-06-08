app.stores.speakers = new Ext.data.JsonStore({
	model: 'Speaker',
	data: [
		{name: 'uno'},
		{name: 'uno2'},
		{name: 'uno3'},
	],
	autoLoad: true
});

Ext.regStore('speakers', app.stores.speakers);
