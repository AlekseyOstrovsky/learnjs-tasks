
let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O


function unique(arr) {
	let setun = new Set(arr);
	return Array.from(setun);
}
 
