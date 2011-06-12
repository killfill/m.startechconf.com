Ext.regApplication({
    icon: 'resources/images/icon.png'
  , glossOnIcon: false
  , tabletStartupScreen: 'resources/images/tablet_startup.png'

  , name: 'app'

  , launch: function() {
    this.views.viewport = new this.views.Viewport();
  }

});
