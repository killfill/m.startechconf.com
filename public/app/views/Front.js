FrontView = Ext.extend(Ext.DataView, {
	store: 'front',
	itemSelector: 'div.slogan',
	tpl: [
		'<div class="frontContent">',
		'<tpl for=".">',
		'<div class=when>{when}</div>', 
		'<div class=desc>{desc}</div>',
		'<div class=weare>Ya somos {counter}!</div>',
		'<div class=prices>',
			'<tpl for="prices">',
			'{type} - {price}<br/>',
			'</tpl>',
		'</div>',
		'</tpl>',
		'</div>',
	],
});
Ext.reg('frontview', FrontView);

app.views.Front = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Startech Conf',
		defaults: {ui: 'plain'},
		items: [
		  { text: '<a href="http://www.startechconf.com">web</a>' },
		  { text: '<a href="https://twitter.com/#!/startechconf" class=twitter></a>' },
		],
	}],
	cls: 'front',
	title: 'Home',
	layout: 'fit',
	items: [
		{ xtype: 'frontview' },
	]
});
Ext.reg('app-front', app.views.Front);
