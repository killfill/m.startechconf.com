Ext.regModel('Talk', {
	fields: [
		'name', 'from', 'to', 'date', 'speaker',
		{name: 'track', type: 'int'},
		{name: 'day', type: 'int'}
	]
});
