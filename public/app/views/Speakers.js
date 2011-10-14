app.views.Speakers = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Speakers'
	}],
	title: 'Speakers',
	layout: 'fit',
	items: [{
		cls: 'speakers-list',
		id: 'speakers-list',
		xtype: 'list',
		store: 'speakers',
		itemTpl: '<img width=80px src="{image}"/> <p class=name>{name}</p>{desc}',
		listeners: {
			selectionchange: function(sel, recs) {
				var rec = recs[0];
				if (!rec) return;

				var popup = new Ext.Panel({
					floating: true,
					modal: true,
					width: 300,
					height: 400,
					centered: true,
					scroll: 'vertical',
					styleHtmlContent: true,
					html: '<h3 class=abs_title>' + rec.data.abs_title + '</h3>' + rec.data.abs_content,
					dockedItems: [{
						xtype: 'toolbar',
						items: [
							{ text: '<a class=twitter />', ui: 'plain', handler: function() {
							    window.location = 'https://twitter.com/#!/'+rec.data.twitter;
							  }
							},
							{ xtype: 'spacer'},
							{ text: 'Close', handler: function() {
								popup.hide();
								sel.deselectAll();
							  }
							}
						]
					}]
				});
				popup.show({type: 'pop'});
			}
		}
	}]
});
Ext.reg('app-speakers', app.views.Speakers);
