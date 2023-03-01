alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );


function checkSpam(str) {	
	let stroka = str.toUpperCase();
	return stroka.includes('XXX') || stroka.includes('VIAGRA') || false;
}