let submit = document.getElementById("button");

function sub(event) {
    event.preventDefault();

    let firstName = document.getElementsByName("First Name")[0].value;
    let lastName = document.getElementsByName("Last Name")[0].value;
    let phoneNumber = document.getElementsByName("Phone Number")[0].value;
    let email = document.getElementsByName("Email ID")[0].value;

    alert(
        "First Name: " + firstName +
        "\nLast Name: " + lastName +
        "\nPhone Number: " + phoneNumber +
        "\nEmail ID: " + email
    );
}

submit.addEventListener("click", sub);