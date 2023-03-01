let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date) {
	let dayArr = [7, 1, 2, 3, 4, 5, 6];
	return dayArr[date.getDay()];
}