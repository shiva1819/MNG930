var arr = [100,12,10,'name', true, null, undefined, ['somex', 'somey'], {'name':'Shiva', "favFood":['idly', 'biryani']}];

var DL = ['ravi', 'shiva', 'sasank'];

console.log(arr[0]); // 100
console.log(arr.length) // 6

// Objects

var compnay = [
				{ empId:1, name:"Shiva", "salary":5000 },
				{ empId:2, name:"Prasad", "salary":6000 },
				{ empId:3, name:"Hari", "salary":7000 },
			  ]

console.log(compnay);

if(compnay[0].empId == 1){
	console.log('Hi This is '+ compnay[0].name +' and my salary is '+ compnay[0].salary);
}