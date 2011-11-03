var scrappyDo = require('scrappy-do');

var container = module.exports = {};

container.memory = {};

var scrappy = scrappyDo.create({
  base: 'www.startechconf.com'
});

scrappy.get('/', function(data, $) {

  data.main = [{
      slogan : $('h2').html()
    //, when : $('p.when').html().split('/')[0]
    , where : $('p.where').html().split('<')[0].trim()
    , counter : $('p.numbers').html()
    , twitter : 'startechconf'
    , desc: $('#resume').children(0).children(0)[2].innerHTML
    , prices: []
  }];

  //keynoters
  data.speakers = []; 
  $('.allkeynoters').children().each(function(idx, el) { 
    var tmp = el.children; 
    var tw = '?',
        abs_title = '?',
	abs_content;
    try { tw = tmp[2].innerHTML.split('@')[1].split('<')[0]; } catch(Ex) {}
    try { abs_title = tmp[4].children[0].children[0].innerHTML.trim() } catch(Ex) {}
    try { abs_content = tmp[5].children[0].innerHTML.trim() } catch(Ex) {}
    try { } catch(Ex) {}

    data.speakers.push({
        name:    tmp[1].innerHTML
      , twitter: tw
      , image:   'http://' + data.base + '/' + tmp[0].src
      , desc:    tmp[3].innerHTML
      , abs_title: abs_title
      , abs_content: abs_content
    }); 
  });

  //prices
  $('.price-numbers').each(function(idx, el) {
    data.main[0].prices.push({type: this.children[1].innerHTML, price: this.children[0].innerHTML});
  }); 

  //sponsors
  data.sponsors = [];
  $('.sponsor-block').each(function(idx, el) {
    var levelName = $(this).find("h4").text();
    $(this).find("li").each(function(i, s){
    	var img = $(this).find("img").attr("src").replace('../','');
    	data.sponsors.push({
   		name: $(this).find("a").attr("title"),
		level: levelName,
		link: $(this).find("a").attr("href"), 
		image: 'http://' + data.base + '/' + img,
		description: $(this).find("p").html()
	});
    });
  });

});

container.reload = function(cb) {
  console.log('Reload:');
  scrappy.once('end', function(data) {
    console.log(' -> end event ', JSON.stringify(data));
    container.memory = data;
    cb && cb(data);
  });
  scrappy.do();
}
