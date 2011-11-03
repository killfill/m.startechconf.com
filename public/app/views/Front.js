FrontView = Ext.extend(Ext.DataView, {
	store: 'front',
	itemSelector: 'div.slogan',
	tpl: [
		'<div class="frontContent">',
		'<tpl for=".">',
		'<div class=when>{when}</div>', 
		'<div class=desc>{desc}</div>',
		'<div class=weare>Entradas Agotadas</div>',
//		'<div class=weare>{counter} preincritos!</div>',
/*		'<div class=prices>',
			'<tpl for="prices">',
			'{type} - {price}<br/>',
			'</tpl>',
*/
		'</div>',
		'</tpl>',
		'</div>',
	],
});
Ext.reg('frontview', FrontView);

app.views.Front = Ext.extend(Ext.Panel, {
	dockedItems: [{
	xtype: 'toolbar',
	title: 'Startech Conf',
	defaults: {ui: 'plain'},
	items: [
		{ 
			text: 'Menu',
	        handler: function() {
	            if (!this.popup) {
	                this.popup = new Ext.Panel({
	                    floating: true,
	                    modal: true,
	                    centered: true,
	                    width: 300,
	                    height: 300,
	                    styleHtmlContent: true,
						layout: {
							pack: 'center',
						},
	                    scroll: 'vertical',
						defaults: {
					        xtype: 'button',
							style: 'margin: 5px 0;'
						},
	                    html: '<p style="text-align: center;">&copy; StarTechConf</p>',
	                    dockedItems: [{
	                        dock: 'top',
	                        xtype: 'toolbar',
	                        title: 'Menu'
	                    }],
						items: [{
							text: 'View in Desktop Version',
							handler : function(){
								location.href="http://www.startechconf.com/?device=desktop"; 
							}
						},{
							text : 'Twitter',
							ui: 'action',
							handler : function(){
								location.href="http://twitter.com/startechconf"; 
							}
						},{
							text : 'Facebook',
							ui: 'action',
							handler : function(){
								location.href="http://facebook.com/startechconf"; 
							}
						},{
							text : 'Map',
							ui: 'action',
							handler : function(){
								app.views.map = new Ext.Panel({
									dockedItems: [{
										xtype: 'toolbar',
										title: 'Mapa',
									}, {
										xtype: 'toolbar',
										dock: 'bottom',
										items: [{
											xtpyE: 'button',
											ui: 'back',
											text: 'Back',
											handler: function() {
												app.views.viewport.show({type: 'slide', direction: 'right'});
												app.views.map.destroy();
											}

										}]

									}],
									fullscreen: true,
									items: [{
										xtype: 'map',
										listeners: {
											afterrender: function(map) {
											  var center = new google.maps.LatLng(-33.490874, -70.620461);
											  map.update(center);
											  var mark = new google.maps.Marker({
												map: map.map,
												position: center,
												title: 'sip'
											  });
											  map.map.setZoom(15);
											}
										}
									}]
								});
								this.popup.hide();
								app.views.map.show({type: 'slide', direction: 'left'})
								app.views.viewport.hide();
							},
							scope: this
						},{
							text : 'Close',
							scope: this,
							handler : function(){
								this.popup.hide();
							}
						}
						]
	                });
	            }
	            this.popup.show('pop');
	        }		
		
		},
		{ text: '<a href="https://twitter.com/#!/startechconf" class=twitter></a>' },
		{ text: '<a href="https://facebook.com/startechconf" class=facebook></a>' },
	],
	}],
	cls: 'front',
	title: 'Home',
	layout: 'fit',
	items: [
		{ xtype: 'frontview' },
	]
});
Ext.reg('app-front', app.views.Front);
