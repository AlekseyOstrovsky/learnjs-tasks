let user = {
	name: "Василий Иванович",
	age: 35
};

user = JSON.stringify(user);

alert( user );

let newuser = JSON.parse(user);

alert( newuser );
alert( JSON.stringify(newuser) );

