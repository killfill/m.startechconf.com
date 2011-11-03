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
			schedule: { xtype: 'app-schedule', iconCls: 'calendar' },
			speakers: { xtype: 'app-speakers', iconCls: 'user_fave' },
			twitter:  { xtype: 'app-twitter', iconCls: 'chat' },
			sponsors: { xtype: 'app-sponsors', iconCls: 'favorites' }
    		});

		Ext.apply(this, {
			items: [
				app.views.front,
				app.views.schedule,
				app.views.speakers,
				app.views.twitter,
				app.views.sponsors
			]
		});

		app.views.Viewport.superclass.initComponent.apply(this, arguments)
	}
});
