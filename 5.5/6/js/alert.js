let calc = new Calculator;

alert( calc.calculate("3 + 7") ); 
alert( calc.calculate("3 - 7") ); 

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

alert( calc.calculate("2 ** 3") ); 
alert( calc.calculate("4 / 2") ); 
alert( calc.calculate("5 * 5") ); 

alert( calc.calculate("") ); 
alert( calc.calculate("5 % 5") ); 
alert( calc.calculate("5+5") ); 


function Calculator() {
	this.calculate = function(str) {
		let a = +str.slice(0, str.indexOf(' '));
		let b = +str.slice(str.lastIndexOf(' ')+1);
		let operator = str.slice(str.indexOf(' ')+1,str.lastIndexOf(' '));
		if (!isFinite(a) || !isFinite(b) || !(operator in this)) return 'Ошибка ввода';
		return this[operator](a,b);
	},
	this["+"] = function(a, b) {
		return (a + b);
	},
	this["-"] = function(a, b) {
		return (a - b);
	}
	this.addMethod = function(op, fun) {
		this[op] = fun;
	}
}