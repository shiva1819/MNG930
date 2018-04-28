var Name, Contact, Company, Email, Gender, save, reset, Nuser, Dashboard;

var datatoPopulate = document.getElementById('datatoPopulate');

Nuser = document.getElementById('Newuser');
Dashboard = document.getElementById('Dashboard');

var Nuserbtn = document.getElementById('Newuserbtn');
var Dashboardbtn = document.getElementById('Dashboardbtn');



Nuserbtn.onclick = function(){
	Nuser.style.display = "block";
	Dashboard.style.display = "none";
}
Dashboardbtn.onclick = function(){
	Nuser.style.display = "none";
	Dashboard.style.display = "block";
}


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
	

	console.log(Companyval);


	for (var i = 0; i < gender.length; i++) {
		if(gender[i].checked == true){
			var Genderval = gender[i].value;	
		}
	}
	console.log(Genderval);

	var tr = document.createElement('tr');

	var NameTd = document.createElement('td');
	var contactTd = document.createElement('td');
	var emailTd = document.createElement('td');
	var companyTd = document.createElement('td');
	var genderTd = document.createElement('td');

	var actionsTd = document.createElement('td');
	var edit = document.createElement('button');
		edit.innerHTML = '<i class="fas fa-edit"></i>';


	var del = document.createElement('button');
		del.innerHTML = '<i class="far fa-window-close"></i>';

		actionsTd.appendChild(edit);
		actionsTd.appendChild(del);


		edit.onclick = function(){
			alert();
		}

	NameTd.innerText = Nameval;
	contactTd.innerText = Contactval;
	companyTd.innerText = Companyval;
	emailTd.innerText = Emailval;
	genderTd.innerText = Genderval;

	/*console.log(NameTd);
	console.log(contactTd);
	console.log(companyTd);
	console.log(emailTd);
	console.log(genderTd);
*/
	// parent.appendChild(child);


	tr.appendChild(NameTd);
	tr.appendChild(contactTd);
	tr.appendChild(emailTd);
	tr.appendChild(companyTd);
	tr.appendChild(genderTd);
	tr.appendChild(actionsTd);
	console.log(tr);
	datatoPopulate.appendChild(tr);
}, false);
	

	

// ele.onclick = cb();






