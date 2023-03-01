alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );


function truncate(str, maxlength) {	
	if (str.length > maxlength) {
		return str.slice(0, maxlength-1) + String.fromCodePoint(8230);
	} else {
		return str;
	}	
}