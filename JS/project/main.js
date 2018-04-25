var Name, Contact, Company, Email, Gender, save, reset;


Name = document.getElementById('username');
contact = document.getElementById('contact');
company = document.getElementById('company');
Email = document.getElementById('email');
gender = document.getElementsByClassName('gend');

save = document.getElementById('save');
reset = document.getElementById('reset');


var btnWrap = document.getElementById('btnWrap');

// ele.addEventListener('evetName', cb);


/*btnWrap.addEventListener('click', function(){
	alert('wrap..');
}, false);
*/
var arr = [];
save.addEventListener('click', function(){
	
	var Nameval = Name.value;
	var Contactval = contact.value;
	var Companyval = company.value;
	var Emailval = email.value;
	var Genderval = gender.value;


	var addName = document.getElementById('addName');
	

	arr.push(Nameval);
	console.log(arr);

	for (var i = 0; i < arr.length; i++) {
		addName.innerHTML += "<li>"+ arr[i] +"</li>"
	}

}, false);
	

	

// ele.onclick = cb();






