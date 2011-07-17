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
		cls: 'sponsorsList',
		itemTpl: '<img src="http://src.sencha.io/100/{image}"/> <a target=_blank href="{link}">{name}</a>'
	}]
});
Ext.reg('app-sponsors', app.views.Sponsors);
