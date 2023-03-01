let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(_object) {
	let result = true;
	for (let prop in _object) {
		result = !(prop in _object);
	}
return result;
}