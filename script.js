setInterval(function(){
	var text = $('.input').val();
	var cur = ['а', 'д', 'е', 'и', 'к', 'м', 'о', 'р', 'у', 'у', 'е', 'у'];
	var lat = ['a', 'g', 'e', 'u', 'k', 'm', 'o', 'p', 'y', 'U', 'e', 'y'];
	var length = cur.length;
	for (i = 0; i < length; i++) {
	   text = text.replace (new RegExp (cur [i], 'g'), lat [i]);
	}
	$('.output').val(text);
}, 50)