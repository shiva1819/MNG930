var Name, Contact, Company, Email, Gender, save, reset, Nuser, Dashboard;

var datatoPopulate = document.getElementById('datatoPopulate');
datatoPopulate.innerHTML = "<tr><td colspan='6'> No records found </td></tr>";

Nuser = document.getElementById('Newuser');
Dashboard = document.getElementById('Dashboard');

var Nuserbtn = document.getElementById('Newuserbtn');
var Dashboardbtn = document.getElementById('Dashboardbtn');
var Male = document.getElementById('male');
var feMale = document.getElementById('female');
var update = document.getElementById('update');

// var totalCount = 0;
var maleCOunt = 0;
var feMaleCount = 0;
var tcount = "";

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
tcount = document.getElementById('tcount');

// ele.addEventListener('evetName', cb);


/*btnWrap.addEventListener('click', function(){
	alert('wrap..');
}, false);
*/
var arr = [];
save.addEventListener('click', function(){

	if(datatoPopulate.firstChild.innerText.indexOf('No records found') > -1){
		datatoPopulate.removeChild(datatoPopulate.children[0]);
	}
	
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

	alert('Information saved to Dashboard')

	Name.value = "";
	contact.value = "";
	company.value = "empty";
	email.value = "";

	for (var i = 0; i < gender.length; i++) {
		gender[i].checked = false
	}


console.log(datatoPopulate.children);
totalCount = datatoPopulate.children.length;



tcount.innerText = totalCount;




edit.onclick = function(){

			Nuser.style.display = "block";
			Dashboard.style.display = "none";


			update.style.display = 'inline';
			save.style.display = 'none';

			var editEle = this.parentNode.parentNode.children;

			Name.value = editEle[0].innerText;
			contact.value = editEle[1].innerText;
			email.value = editEle[2].innerText;
			company.value = editEle[3].innerText;


			if(editEle[4].innerText == 'male'){
				Male.checked = true;
			}else{
				feMale.checked = true;
			}

			update.onclick = function(){

				editEle[0].innerText = Name.value;
				editEle[1].innerText = contact.value;
				editEle[2].innerText = email.value;
				editEle[3].innerText = company.value;

				if(Male.checked == true){
					editEle[4].innerText = "male";
				}else{
					editEle[4].innerText = "female";
				}


				alert('your Information is updated...');

				Name.value = ""
				contact.value = ""
				company.value = "empty"
				email.value = ""
				for (var i = 0; i < gender.length; i++) {
					gender[i].checked = false
				}


				save.style.display = 'inline';
				update.style.display = 'none';


				Nuser.style.display = "none";
				Dashboard.style.display = "block";
				

			}



		/*
			for (var i = 0; i < gender.length; i++) {
				if(editEle[4].innerText == "male"){
					gender[0].checked = true;
				}else{
					gender[1].checked = true;
				}	
			}*/



		}

		del.onclick = function(){
			console.log(this);
			var removeItem = this.parentNode.parentNode;
			datatoPopulate.removeChild(removeItem);

			tcount.innerText = datatoPopulate.children.length;
			// totalCount.innerText = tcount;

			if(datatoPopulate.children.length == 0){
				datatoPopulate.innerHTML = "<tr><td colspan='6'> No records found </td></tr>"
			}
		}

}, false);
	

	

// ele.onclick = cb();






