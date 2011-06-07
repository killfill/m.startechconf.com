app.views.Sponsors = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Sponsors'
	}],
	title: 'Sponsors',
	html: 'Spons'
});
Ext.reg('app-sponsors', app.views.Sponsors);
