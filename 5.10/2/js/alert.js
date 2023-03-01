let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};
 
alert( topSalary(salaries) );


function topSalary(salaries) {
	let result = null;
	let topSal = 0;
	for (let [name, value] of Object.entries(salaries)) {
		if (value > topSal) {
			result = name;
			topSal = value;
		}
	}
	return result;
}

