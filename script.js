let submit = document.getElementById("button");

function sub(event) {
	event.preventDefault();
	alert("Form submitted successfully");
}

submit.addEventListener("click", sub);