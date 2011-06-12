app.views.Front = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Startech Conf',
	}],
	cls: 'front',
	title: 'Home',
	items: [
		{ xtype: 'component',
		  store: 'front',
		  renderData: {"slogan":"48 horas y el evento tecnol<C3><B3>gico m<C3><A1>s grande de Chile","title":"STARTECHCONF Santiago Chile 2011","when":"4 y 5 de Noviembre de 2011 / Santiago de Chile","counter":"611","twitter":"http://twitter.com/startechconf","prices":[{"type":"General","price":"USD 120.00"},{"type":"Estudiantes","price":"USD 50.00"}]},
		  renderTpl: ['Titulo: {title}, Slogan: {slogan}, Cuando: {when}, Contador: {counter}, twitter: {twitter}, prices: {prices} ']
		}
	]
});
Ext.reg('app-front', app.views.Front);
