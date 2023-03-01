alert( extractCurrencyValue('$120') );
alert( extractCurrencyValue('$%#120') );
alert( extractCurrencyValue('120') );
alert( extractCurrencyValue('@#$') );
alert( extractCurrencyValue('') );


function extractCurrencyValue(str) {

	for (let i = 0; i < str.length; i++) {
		if ( isFinite( str.charAt(i) ) ) return +str.slice(i);
	}
	
	return '';
}