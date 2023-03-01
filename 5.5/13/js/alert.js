let users = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
];
 
let usersById = groupById(users);

alert( usersById )


function groupById(arr) {
	return arr.reduce( function(newobj, elem) {
		newobj[elem.id] = elem;
		return newobj;
	}, {} );
}

 /*
 // после вызова у нас должно получиться:
 
 usersById = {
	john: {id: 'john', name: "John Smith", age: 20},
	ann: {id: 'ann', name: "Ann Smith", age: 24},
	pete: {id: 'pete', name: "Pete Peterson", age: 31},
 }
 */