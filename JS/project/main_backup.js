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
var update = document.getElementById('update');
update.style.display = "none";

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

		// class attribute 
		// ele.setAttribute('attrName', 'attrValue');
		// ele.attrName = value;

		edit.className = "edit";


	var del = document.createElement('button');
		del.innerHTML = '<i class="far fa-window-close"></i>';
		del.className = "del";

		actionsTd.appendChild(edit);
		actionsTd.appendChild(del);

		var EditName,EditContact,EditEmail,EditCompany,EditGender,parentEle;

		edit.onclick = function(){

			Nuser.style.display = "block";
			Dashboard.style.display = "none";

			save.style.display = "none";
			update.style.display = 'inline';

			var parentTest = this.parentNode.parentNode;
			parentEle = this.parentNode.parentNode.children
			console.log(this.parentNode.parentNode.children);

			EditName = parentEle[0].innerText;
			EditContact = parentEle[1].innerText;
			EditEmail = parentEle[2].innerText;
			EditCompany = parentEle[3].innerText;
			EditGender = parentEle[4].innerText;


			Name.value = EditName;
			contact.value = EditContact;
			company.value = EditCompany;
			email.value = EditEmail;

			var gendMale = document.getElementById('male');
			var gendFeMale = document.getElementById('female');

			if(EditGender == "male"){	
				gendMale.checked = true;
			}else{
				gendFeMale.checked = true;
			}

			update.onclick = function(){

			EditName = Name.value;
			EditContact = contact.value;
			EditCompany = company.value;
			EditEmail = email.value;


			for (var i = 0; i < gender.length; i++) {
				if(gender[i].checked == true){
					EditGender = gender[i].value;
				}				
			}


			parentEle[0].innerText = EditName;
			parentEle[1].innerText = EditContact;
			parentEle[2].innerText = EditEmail;
			parentEle[3].innerText = EditCompany;
			parentEle[4].innerText = EditGender;

			Name.value = "";
	contact.value = "";
	company.value = "empty";
	email.value = "";

	for (var i = 0; i < gender.length; i++) {
		gender[i].checked = false
	}


			Nuser.style.display = "none";
			Dashboard.style.display = "block";

			save.style.display = "inline";
			update.style.display = 'none';
			

			}
		}

		del.onclick = function(){
			// console.log(this);
			var removeItem = this.parentNode.parentNode;
			datatoPopulate.removeChild(removeItem);
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


	Name.value = "";
	contact.value = "";
	company.value = "empty";
	email.value = "";

	for (var i = 0; i < gender.length; i++) {
		gender[i].checked = false
	}



}, false);
	

	

// ele.onclick = cb();






