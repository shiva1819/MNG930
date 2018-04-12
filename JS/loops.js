var company = [
				{ empId:1, name:"Shiva", "salary":5000 },
				{ empId:2, name:"Prasad", "salary":6000 },
				{ empId:3, name:"Hari", "salary":7000 },
			  ]
// console.log(company)

// company[0]
// company[1]
// company[2]

function loopfn(){
	for (var i = 0; i < company.length; i++) {
		console.log(company[i]);
		console.log('Hi This is '+ company[i].name +' and my salary is '+ company[i].salary);

	}
}

console.log('-------------------------------------------------------------')

for(var i in company){
	console.log('Hi This is '+ company[i].name +' and my salary is '+ company[i].salary);	
}