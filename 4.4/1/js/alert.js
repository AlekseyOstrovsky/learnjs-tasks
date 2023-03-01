let calculator = {
	read() {
		this.a = +prompt('Введите число a','');
		this.b = +prompt('Введите число b','');
	},
	sum() {
		return ( this.a + this.b );
	},
	mul() {
		return ( this.a * this.b );
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
