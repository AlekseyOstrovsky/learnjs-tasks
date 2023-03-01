alert('Введите число');

let a = readNumber();

alert(a);


function readNumber() {
	while (true) {
		let value = prompt('Введите число','');
		
		if ((value === "") || (value === null)) {
			return null;
		}
		
		if ( isFinite(value) ) {
			return +value;
		}
	}
}