alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([2, -1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([-1, -2, -3]) );


function getMaxSubSum(arr) {	
	let sum = 0;
	let tempsum = 0;
	for (let elem of arr) {
		tempsum = Math.max(0, tempsum + elem);
		sum = Math.max(tempsum, sum);
	}
	return sum;
}