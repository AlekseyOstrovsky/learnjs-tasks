alert( getSecondsToTomorrow() );

function getSecondsToTomorrow() {
	let dateCur = new Date();
	let dateNul = new Date();
	dateNul.setHours(0, 0, 0, 0);
	dateNul.setDate( dateNul.getDate() + 1 );
	return Math.round( (dateNul-dateCur) / 1000 );
}