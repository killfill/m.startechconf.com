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
			home: {
				title: 'asd',
				xtype: 'panel'
			},
			front: {
				title: 'sip',
				xtype: 'app-front'
			},
			speakers: {
				xtype: 'app-speakers'
			},
			sponsors: {
				xtype: 'app-sponsors'
			}
    		});

		Ext.apply(this, {
			items: [
				app.views.front,
				app.views.home,
				app.views.speakers,
				app.views.sponsors
			]
		});

		app.views.Viewport.superclass.initComponent.apply(this, arguments)
	}
});
