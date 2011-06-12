app.views.Sponsors = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Sponsors'
	}],
	title: 'Sponsors',
	layout: 'fit',
	items: [{
		xtype: 'list',
		store: 'sponsors',
		itemTpl: '<img src="{image}"/> <a href="{link}">{name}</a>'
	}]
});
Ext.reg('app-sponsors', app.views.Sponsors);
