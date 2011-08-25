Date.days = {
    0: 'Dom'
  , 1: 'Lun'
  , 2: 'Mar'
  , 3: 'Mie'
  , 4: 'Jue'
  , 5: 'Vie'
  , 6: 'Sab'
}

Date.prototype.getDayCode = function() {
  var day = this.getDay();
  return Date.days[day];
}

Date.today = function() {
  var d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

Date.months = {
	  0: 'Enero'
	, 1: 'Febrero'
	, 2: 'Marzo'
	, 3: 'Abril'
	, 4: 'Mayo'
	, 5: 'Junio'
	, 6: 'Julio'
	, 7: 'Agosto'
	, 8: 'Septiembre'
	, 9: 'Octubre'
	, 10: 'Noviembre'
	, 11: 'Diciembre'
}

  
twoDigits = function(num) {
  if (num<10) return '0'+num;
  else return num;
}


Date.prototype.format = function(type) {

  switch (type) {
  
    case 'fullhuman': 
	  return Date.days[this.getDay()] + ' ' + this.getDate() + ' de ' + Date.months[this.getMonth()]; 

    case 'human':
	
		if (this.isToday())
		  return 'Hoy';
		if (this.was(1))
		  return 'Ayer';

		return this.format('fullhuman');
		
	case 'date':
		return this.getFullYear() + '-' + twoDigits(this.getMonth()+1) + '-' + twoDigits(this.getDate()+1)
		
	case 'humandate':
		return twoDigits(this.getDate()+1) + '/' + twoDigits(this.getMonth() + 1);
	
	case 'humantime':
		return twoDigits(this.getHours()) + ':' + twoDigits(this.getMinutes());	
	
	default:
		throw new Exception('what format?');
  }

}

Date.prototype.isToday = function() {
  return this.was(0);
}

Date.prototype.was = function(n) {
  var now = new Date();
  var target = new Date(now.getFullYear(), now.getMonth(), now.getDate()-n);
  return target.format('date') == this.format('date');
}

