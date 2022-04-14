var reg = document.getElementById("Register");
var quit = document.getElementById("Quit");
var uname = document.getElementById("firstname")
var dat = document.getElementById("DateofBirth")
var age = document.getElementById("age")
var gender = document.querySelectorAll([type = "radio"])
var email = document.getElementById("Email")
var maxL = document.getElementById("firstname").maxLength.value
var minL = document.getElementById("firstname").minLength.value

var PlayersData = new Array();
function Storage() {
	var name = document.getElementById('firstname').value;
	window.alert("Hello " + name);
	var today = new Date;
	var year = today.getFullYear;
	var dob = document.getElementById('DateofBirth').value;
	var email = document.getElementById('Email').value;
	var age = ageCalculator();
	var gen; /*= document.getElementById('');*/
	var gender;
	if (gen = document.getElementById('gendF') == clicked) {
		gender = "Female";
	} else {
		gender = "Male";
	}
	if (!(typeof name === 'undefined') && name != null && name.trim() != '') {
		myArray.push(name);
	}
	console.log(PlayersData);
	document.getElementById('firstname').value = '';
}


/* function validUser (userName){
	var num = 1;
	if (userName.value.length < 3)
	{
		try {
		  string.length();
		}
		catch(err) {
		  document.getElementById("demo").innerHTML = err.name;
		}
		
	}

} */

/*function stringlength(input, minL, maxL)
{ 
	var field = input.value; 
	var mnlen = minL;
	var mxlen = maxL;

	if(field.length < mnlen || field.length > mxlen)
	{ 
		alert("Please input the User Name between " + mnlen + " and " + mxlen + "characters");
		return false;
	}
	else
	{ 
		alert('Your User Name has been accepted.');
		return true;
	}
}*/

function ValidateEmail(input) {

	var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

	if (input.value.match(validRegex)) {

		alert("Valid email address!");

		document.form1.text1.focus();

		return true;

	} else {

		alert("Invalid email address!");

		document.form1.text1.focus();

		return false;

	}
}

function isValidEmail(email) {
	const re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;
	return re.test(String(email).toLowerCase());
}

function validateEmail(email) {
	var re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;
	return re.test(email);
}

function ageCalculator(input) {
	var dob = new Date(input.value);
	/*if (input == null || input == '') {
		document.getElementById("message").innerHTML = "Choose a date please!";
		return false;
	} else {*/
	var month_diff = Date.now() - dob.getTime();
	var age_dt = new Date(month_diff);
	var year = age_dt.getUTCFullYear();
	var age = Math.abs(year - 1970);
	document.getElementById('age').innerHTML = age;
	return age;
}


reg.addEventListener("click", function (e) {
	e.preventDefault();
	console.log(ageCalculator(dat));
	console.log(validateEmail(email.value));
	/*console.log(stringlength(uname.value));*/

});





