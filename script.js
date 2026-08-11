let submit = document.getElementById("button");

function sub(event) {
    event.preventDefault();

    let firstName = document.querySelector('input[name="First Name"]').value;
    let lastName = document.querySelector('input[name="Last Name"]').value;
    let phoneNumber = document.querySelector('input[name="Phone Number"]').value;
    let email = document.querySelector('input[name="Email ID"]').value;

    alert(
        "First Name: " + firstName +
        "\nLast Name: " + lastName +
        "\nPhone Number: " + phoneNumber +
        "\nEmail ID: " + email
    );
}

submit.addEventListener("click", sub);