app.views.Speakers = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Speakers'
	}],
	title: 'Speakers',
	html: 'Speakers'
});
Ext.reg('app-speakers', app.views.Speakers);
