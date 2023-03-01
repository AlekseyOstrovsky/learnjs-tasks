let login = prompt('Введите login','');
let message = '';

if (login == 'Админ') {

	let password = prompt('Введите пароль','');
	message = (password == 'Я главный') ? 'Здравствуйте!' :
		(password == '' || password == null) ? 'Отменено' :
		'Неверный пароль';
		
} else if (login == '' || login == null) {
	message = 'Отменено';
} else {
	message = 'Я Вас не знаю';
}

alert(message);