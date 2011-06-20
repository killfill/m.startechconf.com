app.views.Speakers = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Speakers'
	}],
	title: 'Speakers',
	layout: 'fit',
	items: [{
		cls: 'speakers-list',
		xtype: 'list',
		store: 'speakers',
		itemTpl: '<img src="{image}"/> <p class=name>{name}</p> {desc}',
		listeners: {
			selectionchange: function(sel, recs) {
				var rec = recs[0];
				if (!rec) return;
				Ext.Msg.confirm('Referencia externa', 'Abrir @'+rec.data.twitter+' en Twitter?', function(res){
					if (res=='yes')
						window.href='https://twitter.com/#!/'+rec.data.twitter;
					sel.deselectAll();
				});
			}
		}
	}]
});
Ext.reg('app-speakers', app.views.Speakers);
