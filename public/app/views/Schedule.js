filterSchedule = function(prop, val) {
	var sch = Ext.getCmp('schedule-id'),
 	    sto = sch.store;
	sto.clearFilter();
	sto.filter(prop, val);
	sch.scroller.scrollTo(0);
}


app.views.Schedule = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		ui: 'light',
		title: '&nbsp;',
		items: [
			{xtype: 'spacer'},
			{
				xtype: 'segmentedbutton',
				allowDepress: false,
				items: [
					{pressed: true, text: 'Vie 4 Nov', handler: function() { filterSchedule('day', 1); }},
					{text: 'Sab 5 Nov', handler: function() { filterSchedule('day', 2);}},
				]
			},
		]
	}],
	title: 'Schedule',
	layout: 'fit',
	items: [{
		cls: 'schedule-list',
		id: 'schedule-id',
		xtype: 'list',
		store: 'schedule-store',
		itemTpl: "<div class='sch_left track_{track}'>{from}-{to} <tpl if=\"track!=-1\"><br/><br/></tpl> <tpl if=\"track==0\"><small>Only option</small></tpl><tpl if=\"track &gt; 0\"><small>Track {track}</small></tpl>&nbsp;</div> <span class='name_track_{track} name_track'>{name}</span><span class='name_speaker'>{speaker}</span>",
		listeners: {
			
		}
	}],
});

Ext.reg('app-schedule', app.views.Schedule);
