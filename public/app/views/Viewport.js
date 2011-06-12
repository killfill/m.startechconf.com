app.views.Viewport = Ext.extend(Ext.TabPanel, {
	fullscreen: true,
	tabBar: {
		dock: 'bottom',
		layout: {
			pack: 'center'
		}
	},

	initComponent: function() {

		Ext.apply(app.views, {
			front:    { xtype: 'app-front', iconCls: 'home' },
			speakers: { xtype: 'app-speakers', iconCls: 'user_fave' },
			sponsors: { xtype: 'app-sponsors', iconCls: 'search' }
    		});

		Ext.apply(this, {
			items: [
				app.views.front,
				app.views.speakers,
				app.views.sponsors
			]
		});

		app.views.Viewport.superclass.initComponent.apply(this, arguments)
	}
});
