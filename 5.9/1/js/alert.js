let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
	let result = 0;	
	for (let value of Object.values(salaries)) {
		result += value;
	}
	return result;
}
