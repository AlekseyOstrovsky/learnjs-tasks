let numArr = [10, "строка"];

alert(`Сумма элементов массива = ${sumInput(numArr)}`);

alert(numArr);

function sumInput(arr) {
	let sum = 0;
	
	while (true) {
		let value = prompt('Введите число для добавления в массив','');
		if ((value === "") || (value === null) || isNaN(value)) {
			break;
		} else {
			arr.push(+value);
		}
	}	

	for (let elem of arr) {
		if ( isFinite(elem) ) {  // если в массиве были строки, пропускаем их
			sum += +elem;
		}
	}

	return sum;
}