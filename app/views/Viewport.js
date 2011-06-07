app.views.Viewport = Ext.extend(Ext.Panel, {
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
			}
    		});

		Ext.apply(this, {
			items: [
				app.views.home
			]
		});

		app.views.Viewport.superclass.initComponent.apply(this, arguments)
	}
});
