app.views.Twitter = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Twitter',
	}],
	title: 'Twitter',
	layout: 'fit',
	items: [{
		cls: 'speakers-list',
		xtype: 'list',
		store: 'tweets',
		itemTpl: '<img src="{profile_image_url}" /><div class="right light">{created}</div><p class=name>@{from_user}</p>{text}',
		plugins: [{ptype: 'pullrefresh'}],
		listeners: {
			selectionchange: function(sel, recs) {
				var rec = recs[0];
				if (!rec) return;
				Ext.Msg.confirm('Referencia externa', 'Abrir en Twitter?', function(res){
					if (res=='yes')
						window.location = 'http://twitter.com/' + rec.data.from_user + '/status/' + rec.data.id;
					sel.deselectAll();
				});
			}
		}
	}],
});
Ext.reg('app-twitter', app.views.Twitter);
