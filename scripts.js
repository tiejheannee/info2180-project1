document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const email = emailInput.value.trim();

        if (email) {
            messageDiv.innerHTML = "Thank you! Your email address <span>${email}</span> has been added to our mailing list XD";
        } else {
            messageDiv.textContent = "Please enter a valid email address.";
        }
    });
});
