app.stores.schedule_store = new Ext.data.JsonStore({
	model: 'Talk',
	autoLoad: true,
	proxy: {
		type: 'rest',
		url: 'api/data/schedule'
	},
	sorters: [{
			property: 'from',
			direction: 'ASC'
	}],
	filters: {
		property: 'day',
		value: 1
	}
});

Ext.regStore('schedule-store', app.stores.schedule_store);
