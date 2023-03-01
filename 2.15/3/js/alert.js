const x = +prompt('Введите число','');
const n = +prompt('Введите степень','');

function pow(x,n) {
	if ((n < 1) || (n % 1 != 0)) {
		return 'Степень должна быть натуральным числом';
	} else {
		return x**n;
	} 
}

alert(pow(x,n));