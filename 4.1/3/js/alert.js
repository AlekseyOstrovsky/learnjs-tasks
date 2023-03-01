let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = calcObjSum(salaries);
alert(sum);

function calcObjSum(_object) {
	let result = 0;
	for (let prop in _object) {
		result += +_object[prop];
	}
	return result;
}