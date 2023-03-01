let calculator = new Calculator();

calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator() {
	this.read = function() {
		this.a = +prompt('Введите число a','');
		this.b = +prompt('Введите число b','');
	},
	this.sum = function() {
		return ( this.a + this.b );
	},
	this.mul = function() {
		return ( this.a * this.b );
	}
}


