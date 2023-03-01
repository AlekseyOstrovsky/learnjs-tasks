let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

showObject(user);

function showObject(_object) {
	for (let prop in _object) {
		alert(prop + ' = ' + _object[prop]);
	}
}