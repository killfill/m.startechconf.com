Ext.regApplication({
    icon: 'resources/images/icon.png'
  , glossOnIcon: false
  , tabletStartupScreen: 'resources/images/tablet_startup.jpg'

  , name: 'app'

  , launch: function() {
    this.views.viewport = new this.views.Viewport();
    Ext.anims.slide.config.duration=400;
    Ext.anims.pop.config.duration=500;
  }

});
