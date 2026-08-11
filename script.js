let submit = document.getElementById("button");

function sub(event) {
	event.preventDefault();
	let firstName = document.querySelector(`input[name=firstName]`).value;
	let lastName = document.querySelector(`input[name=lastName]`).value;
    let phoneNumber = document.querySelector(`input[name=phoneNumber]`).value;
	let email = document.querySelector(`input[name=email]`).value;
	
	alert(
		"First Name: "+firstName+
		"\nLast Name: "+lastName+
		"\nphoneNumber: "+phoneNumber+
		"\nemail: "+email
	);
}

submit.addEventListener("click", sub);