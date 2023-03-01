alert( camelize("background-color") );//== 'backgroundColor'
alert( camelize("list-style-image") );//== 'listStyleImage'
alert( camelize("-webkit-transition"));//== 'WebkitTransition'

function camelize(str) {
	let words = str.split('-');
	words = words.map( (item, index) => {
		if (index !=0) {
			return item[0].toUpperCase() + item.slice(1);
		} else {
			return item;
		}
	});
	str = words.join('');
	return str;
}

