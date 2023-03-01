 let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
 ];
 
 alert( unique(strings) ); // кришна, харе, :-O

 function unique(arr) {
	let newarr = arr.slice().sort();
	let i = 0;
	while (i < newarr.length-1) {
		if (newarr[i] == newarr[i+1]) {
			newarr.splice(i+1,1);
		} else {
			i++;
		}
	}
	return newarr;
 }