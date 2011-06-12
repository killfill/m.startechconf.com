app.views.Speakers = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Speakers'
	}],
	title: 'Speakers',
	layout: 'fit',
	items: [ {
		xtype: 'list',
		store: 'speakers',
		itemTpl: '<img src="{image}"/> {name}: {desc}',
	}]
});
Ext.reg('app-speakers', app.views.Speakers);
