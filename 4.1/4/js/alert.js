let menu = {
	width: 200,
	height: 300,
	title: "My menu",
 };

showObject(menu);
multiplyNumeric(menu);
showObject(menu);

function showObject(_object) {
	for (let prop in _object) {
		alert(prop + ' = ' + _object[prop]);
	}
}

function multiplyNumeric(_object) {
	for (let prop in _object) {
		if ( (typeof _object[prop]) === 'number') _object[prop] *= 2;
	}
}