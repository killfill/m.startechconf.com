app.views.Viewport = Ext.extend(Ext.TabPanel, {
	fullscreen: true,
	tabBar: {
		dock: 'bottom',
		ui: 'light',
		layout: {
			pack: 'center'
		}
	},

	initComponent: function() {

		Ext.apply(app.views, {
			front:    { xtype: 'app-front' },
			speakers: { xtype: 'app-speakers' },
			sponsors: { xtype: 'app-sponsors' }
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
