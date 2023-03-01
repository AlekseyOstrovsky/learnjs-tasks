alert( getSecondsToday() );

function getSecondsToday() {
	let dateCur = new Date();
	let dateNul = new Date();
	dateNul.setHours(0, 0, 0, 0);
	return Math.round( (dateCur-dateNul) / 1000 );
}