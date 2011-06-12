app.views.Speakers = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Speakers'
	}],
	title: 'Speakers',
	layout: 'fit',
	items: [ {
		cls: 'speakers-list',
		xtype: 'list',
		store: 'speakers',
		itemTpl: '<img src="{image}"/> <p>{name}</p> {desc}',
	}]
});
Ext.reg('app-speakers', app.views.Speakers);
