//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(array) {
	let map = new Map();
	for (let elem of array) {
		map.set( elem.toLowerCase().split('').sort().join(''), elem );
	}
	return Array.from( map.values() );
}
