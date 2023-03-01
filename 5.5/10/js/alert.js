let arr = [1, 2, 3];

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);


function shuffle(array) {
	for (let i=0; i < array.length; i++) {
		let j = randomInteger(i, array.length-1);
		let a = array[j];
		array[j]=array[i];
		array[i]=a;
	}
}

function randomInteger(min, max) {
	return Math.floor( Math.random()*(max-min+1)+min );	
}

