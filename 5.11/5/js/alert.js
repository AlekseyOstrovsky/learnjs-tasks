alert( getLastDayOfMonth(2012, 1) );

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month+1, 1, 0, 0, 0, 0);
	date.setDate(date.getDate() - 1);
	return date.getDate();
}